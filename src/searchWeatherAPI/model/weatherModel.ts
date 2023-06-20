const WeatherModel = {
    weatherDate: {
        name: 'weatherDate',
        notNull: true,
        type: 'STRING',
        maxLength: 10,
        position: 0
    },
    weatherText: {
        name: 'weatherText',
        notNull: true,
        type: 'STRING',
        maxLength: 255,
        position: 1,
    },
    minTemp: {
        name: 'minTemp',
        notNull: true,
        type: 'FLOAT',
        maxLength: 4,
        position: 2,
    },
    maxTemp: {
        name: 'maxTemp',
        notNull: true,
        type: 'FLOAT',
        maxLength: 4,
        position: 3,
    },
    rainProbability: {
        name: 'rainProbability',
        notNull: true,
        type: 'FLOAT',
        maxLength: 4,
        position: 4,
    },
    rainPrecipitation: {
        name: 'rainPrecipitation',
        notNull: true,
        type: 'FLOAT',
        maxLength: 4,
        position: 5,
    }
}

export {WeatherModel}