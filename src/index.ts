import express, { Application } from 'express'
import { routes } from './routes/index.'
import { logger } from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'

const app: Application = express()
const port: Number = 4000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors handler
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

routes(app)

app.listen(port, () => logger.info(`Server is listening on port ${port}`))
