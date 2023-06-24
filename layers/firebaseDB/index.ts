import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get} from 'firebase/database'
import logger from '../logger/logConfig'


async function getConnection(): Promise<any> {
    try {
        logger.info('Starting getConnection() in DB')
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            domain: process.env.AUTHDOMAIN,
            dataBaseURL: process.env.DATABASE_URL,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID
        }
        const app = initializeApp(firebaseConfig)
        const db = getDatabase(app)
        logger.info('Returning db')
        return db
    } catch (error) {
        logger.error('Error in getConnection()', error)
        return Promise.reject(error)
    }
}

export { getConnection, child, get, ref }