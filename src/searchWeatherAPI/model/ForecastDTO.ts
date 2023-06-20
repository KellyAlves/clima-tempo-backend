import PeriodDTO from './PeriodDTO'
import LocalesDTO from './LocalesDTO'
import WeatherDTO from './WeatherDTO'

export default class ForecastDTO {
    period: PeriodDTO
    locale: LocalesDTO
    weather: WeatherDTO[]
}