import IService from "./IService"
import 'firebase/database'
import { WeatherDTO, LocalesDTO, PeriodDTO } from "../model"
import { getConnection, child, get, ref} from "../../../layers/firebaseDB"
import logger from '../../../layers/logger/logConfig'

export default class Service implements IService {

    private connection: any
    private db: any

    async init() {
        this.db = await getConnection()
        this.connection = ref(this.db)
    }

    public async getAllLocales(): Promise<LocalesDTO[] | null> {
        try {
            logger.debug('Starting getAllLocales() in Service')
            const locales: LocalesDTO[] = []
            const allLocales = await get(child(this.connection, 'locales/'))

            if (!allLocales.exists()) {
                logger.info('No locales found!')
                return null
            }

            allLocales.forEach((loc) => {
                locales.push(loc.val())
            })
            logger.info('Returning locales')
            logger.debug('Returning locales', locales)
            return locales
        } catch (error) {
            logger.error('Error in getAllLocales()', error)
            return null
        }
    }
    
    public async getLocalesById(id: string): Promise<LocalesDTO | null> {
        try {
            logger.debug('Starting getLocalesById() in Service')
            const snapshot = await get(child(this.connection, `locales/${id}`))

            if (!snapshot.exists()) {
                logger.info('No locale found!')
                return null
            }

            const locale: LocalesDTO = snapshot.val()
            logger.info('Returning locale')
            logger.debug('Returning locale', locale)
            return locale

        } catch (error) {
            logger.error('Error in getLocalesById()', error)
            return null
        }
    }
    public async getWeathertById(id: string): Promise<WeatherDTO | null> { 
        try {
            logger.info('Starting getForecastById() in Service')
            const snapshot = await get(child(this.connection, `weather/${id}/weather`))

            if (!snapshot.exists()) {
                logger.info('No forecast found!')
                return null
            }

            const weather: WeatherDTO = snapshot.val()
            logger.info('Returning weather')
            logger.debug('Returning weather', weather)
            return weather

        } catch (error) {
            logger.error('Error in getWeatherById()', error)
            return null
        }
    }
    public async getCheckPeriod (id: string, periodBegin: string, periodEnd: string): Promise<Boolean | null> {
        try {
            logger.info('Starting getCheckPeriod() in Service')
            const snapshot = await get(child(this.connection, `weather/${id}/period`))

            if (!snapshot.exists()) {
                logger.info('No period found!')
                return null
            }

            const periodData: PeriodDTO  = snapshot.val()
            let response = false

            const inputBegin = new Date(periodBegin)
            const inputEnd = new Date(periodEnd)
            const periodDataBegin = new Date(periodData.begin)
            const periodDataEnd = new Date(periodData.end)

            if ( periodDataBegin <= inputBegin &&  inputEnd <= periodDataEnd) {
                response = true
            }
            logger.info('Returning forecast')
            logger.debug('Returning forecast')
            return response
          } catch (error) {
            logger.error('Error in getCheckPeriod()', error)
            return null
          }
    }
}
