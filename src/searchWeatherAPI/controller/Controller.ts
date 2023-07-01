import { Request, Response } from 'express'
import { WeatherDTO, LocalesDTO } from "../model"
import Service from "../service/Service"
import logger from '../../../layers/logger/logConfig'

export default class Controller extends Service {

    constructor() {
        super()
        this.init()
    }

    public async listLocales(req: Request, res: Response): Promise<Response> {
        try {
            logger.info('Starting listLocales() in Contoller')
            const locales: LocalesDTO[] | null = await this.getAllLocales()

            if (!locales) {
                return res.status(404).json({ message: 'No locales found!' })
            }

            return res.status(200).json(locales)
        } catch (error) {
            logger.error('Internal server error', error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
    public async localesById(req: Request, res: Response): Promise<Response> { 
        try {
            
            logger.info('Starting localesById() in Contoller')
            const { id } = req.params
            const locale: LocalesDTO | null = await this.getLocalesById(id)

            if (!locale) {
                return res.status(404).json({ message: 'No locale found!' })
            }
    
            return res.status(200).json(locale)
        } catch (error) {
            logger.error('Internal server error', error)
            return res.status(500).json({ message: 'Internal server error' })
        }
     }
    public async weatherById(req: Request, res: Response): Promise<Response> { 
        try {
            
            logger.info('Starting forecastById() in Contoller')
            const { id } = req.params
            const weather: WeatherDTO | null = await this.getWeathertById(id)

            if (!weather) {
                return res.status(404).json({ message: 'No weather found!' })
            }
            
            return res.status(200).json(weather)
        } catch (error) {
            logger.error('Internal server error', error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
    public async checkPeriod(req: Request, res: Response): Promise<Response> { 
        try {
            
            logger.info('Starting forecastById() in Contoller')
            const { id, periodBegin, periodEnd } = req.params
            const data: Boolean | null = await this.getCheckPeriod(id, periodBegin, periodEnd)

            if (data === null) {
                return res.status(404).json({ message: 'No period found!' })
            }
            return res.status(200).json(data)
        } catch (error) {
            logger.error('Internal server error', error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}