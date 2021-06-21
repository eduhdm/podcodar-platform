import * as dotenv from 'dotenv'
import path from 'path'

declare type Stage = 'dev'

const configFilesByStage = {
  dev: '.env.dev',
}

const stage = (process.env.STAGE ?? '') as Stage
const configFile = stage ? configFilesByStage[stage] : configFilesByStage['dev']

dotenv.config({ debug: true, path: path.resolve(process.cwd(), configFile) })

const config = {
  port: Number(process.env.PORT) || 3000,
  loggerLevel: 'debug',
  db: {
    user: process.env.DB_USER || '',
    database: process.env.DB || '',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || '',
    port: Number(process.env.DB_PORT) || 5432,
  },
}

export = config
