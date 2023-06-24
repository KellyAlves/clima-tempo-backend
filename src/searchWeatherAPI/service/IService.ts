import { ForecastDTO, LocalesDTO } from "../model"

interface IService {
    getAllLocales(): Promise<LocalesDTO[]|null>
    getAllForecast(): Promise<ForecastDTO[]|null>
    getLocalesById(nameLocales: string): Promise<LocalesDTO|null>
    getForecastById(id: string): Promise<ForecastDTO | null> 
}

export default IService