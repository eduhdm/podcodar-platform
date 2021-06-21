import config from '../config'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, printf } = format

const loggerFormat = printf((info: any) => {
  return `${info.timestamp} | ${info.level}: ${info.message}`
})

const logger = createLogger({
  level: config.loggerLevel,
  format: combine(format.colorize(), timestamp(), loggerFormat),
  transports: [new transports.Console()],
})

export = logger
