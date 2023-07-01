import winston from 'winston';

const custom = {
    levels: {
      info: 0,
      error: 1,
      debug: 2
    },
    colors: {
      info: 'green',
      error: 'red',
      debug: 'blue'
    }
  }

winston.addColors(custom.colors);

const logger = winston.createLogger({
  levels: custom.levels,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.log' })
  ]
});

export default logger
