import { ForecastDTO, LocalesDTO, PeriodDTO } from "../model"

interface IService {
    getAllLocales(): Promise<LocalesDTO[]|null>
    getAllForecast(): Promise<ForecastDTO[]|null>
    getLocalesById(nameLocales: string): Promise<LocalesDTO|null>
    getForecastById(id: string): Promise<ForecastDTO | null> 
    getCheckPeriod(id: string, periodBegin: string, periodEnd: string): Promise<Boolean | null>
}

export default IService