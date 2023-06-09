import express, { Application } from 'express'
import { routes } from './routes/index.'
import bodyParser from 'body-parser'
import cors from 'cors'
// import { logger } from './utils/logger'

// Connect DB auto dijalankan file di connectDB.ts
import './utils/connectDB'
import deserializedToken from './middleware/deserializedToken'

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
app.use(deserializedToken)
routes(app)

// app.listen(port, () => logger.info(`Server is listening on port ${port}`))
app.listen(port, () => console.log(`Server is listening on port ${port}`))
