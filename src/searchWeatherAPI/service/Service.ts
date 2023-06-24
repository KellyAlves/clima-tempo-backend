import IService from "./IService"
import 'firebase/database'
import { ForecastDTO, LocalesDTO } from "../model"
import { getConnection, child, get, ref} from "../../../layers/firebaseDB"
import logger from '../../../layers/logger/logConfig'

export default class Service implements IService {

    private connection: any
    private db: any

    async init() {
        this.db = await getConnection();
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
            });
            logger.info('Returning locales')
            logger.debug('Returning locales', locales)
            return locales;
        } catch (error) {
            logger.error('Error in getAllLocales()', error)
            return null;
        }
    }
    public async getAllForecast(): Promise<ForecastDTO[] | null> {
        try {
            logger.debug('Starting getAllForecast() in Service')
            const forecasts: ForecastDTO[] = []

            const allForecasts = await get(child(this.connection, 'weather/'))

            if (!allForecasts.exists()) {
                logger.info('No forecasts found!')
                return null
            }

            allForecasts.forEach((fct) => {
                forecasts.push(fct.val())
            });

            logger.info('Returning forecasts')
            logger.debug('Returning forecasts', forecasts)
            return forecasts
        } catch (error) {
            logger.error('Error in getAllForecast()', error)
            return null;
        }
    }
    public async getLocalesById(id: string): Promise<LocalesDTO | null> {
        try {
            logger.debug('Starting getLocalesById() in Service')
            const snapshot = await get(child(this.connection, `locales/${id}`))

            if (!snapshot.exists()) {
                logger.info('No locale found!')
                return null;
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
    public async getForecastById(id: string): Promise<ForecastDTO | null> { 
        try {
            logger.info('Starting getForecastById() in Service')
            const snapshot = await get(child(this.connection, `weather/${id}`))

            if (!snapshot.exists()) {
                logger.info('No forecast found!')
                return null;
            }

            const forecast: ForecastDTO = snapshot.val()
            logger.info('Returning forecast')
            logger.debug('Returning forecast', forecast)
            return forecast

        } catch (error) {
            logger.error('Error in getForecastById()', error)
            return null
        }
    }
}
