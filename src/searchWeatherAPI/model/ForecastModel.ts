const ForecastModel = {
    period: {
        name: 'period',
        pimaryKey: false,
        notNull: true,
        type: 'PeriodModel',
        position: 0
    },
    locale: {
        name: 'locale',
        primaryKey: false,
        notNull: true,
        type: 'LocaleModel',
        position: 1
    },
    weather: {
        name: 'weather',
        primaryKey: false,
        notNull: true,
        type: 'WeatherModel',
        position: 2
    }

}
export { ForecastModel }