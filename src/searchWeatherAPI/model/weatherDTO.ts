import RainDTO from './RainDTO'
import TemperatureDTO from './TemperatureDTO'
export default class WeatherDTO {
    weatherDate: string
    rain: RainDTO
    temperature: TemperatureDTO
    weatherText: string
}