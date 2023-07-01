import { LocalesDTO, WeatherDTO } from "../model"

interface IService {
    getAllLocales(): Promise<LocalesDTO[]|null>
    getLocalesById(nameLocales: string): Promise<LocalesDTO|null>
    getWeathertById(id: string): Promise<WeatherDTO| null> 
    getCheckPeriod(id: string, periodBegin: string, periodEnd: string): Promise<Boolean | null>
}

export default IService