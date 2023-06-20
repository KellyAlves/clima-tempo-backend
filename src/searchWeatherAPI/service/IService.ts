import { ForecastDTO, LocalesDTO } from "../model"

interface IService {
    getAllLocales(): Promise<LocalesDTO[]|null>
    getAllForecast(): Promise<ForecastDTO[]|null>
    getLocalesByName(nameLocales: string): Promise<LocalesDTO[]|null>
    getForecastByDate({ periodBegin, periodEnd }: { periodBegin: string, periodEnd: string }): Promise<ForecastDTO[] | null> 
}

export default IService