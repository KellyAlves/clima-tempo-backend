require('dotenv').config()
import express from 'express'
import cors from 'cors'
import Controller from './controller/Controller'
import logger from '../../layers/logger/logConfig'

logger.info('Starting server...')
const app = express()
const port = 3030

app.use(express.json())
app.use(cors())

const contoller = new Controller()

app.get('/locales/', contoller.listLocales.bind(contoller))
app.get('/locales/:id', contoller.localesById.bind(contoller))
app.get('/weather/:id', contoller.weatherById.bind(contoller))
app.get('/period/:id/:periodBegin/:periodEnd', contoller.checkPeriod.bind(contoller))
// app.delete('/books/:id', bookController.deleteBook.bind(bookController))

app.use((req, res, next) => {
    logger.error('Server not found')
    res.status(404).json({ error: 'Not Found' })
})

app.listen(port, () => {
    logger.info(`Server listening on http://localhost:${port}`)
    logger.debug(`Starting server on port ${port} an routes /locales, /forecasts, /locales/:id, /forecasts/:id`)
    
})
