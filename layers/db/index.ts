import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get} from "firebase/database";
require('dotenv').config()


async function getConnection(): Promise<any> {
    try {
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
        const db = getDatabase(app);
        return ref(db)
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}

export { getConnection, child, get}