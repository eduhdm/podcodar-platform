/* eslint-disable @typescript-eslint/no-var-requires */
// Load config first to be used by following modules
import * as config from './config'

import express from 'express'
import { router } from './routes'
import logger from './utils/logger'

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/', router)

app.listen(config.port, () => {
  logger.info(`Listening on :${config.port}`)
})
