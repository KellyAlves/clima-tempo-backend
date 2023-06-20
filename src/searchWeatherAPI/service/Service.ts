import IService from "./IService"
import { ForecastDTO,
    ForecastModel,
    LocalesDTO,
    LocalesModel,
    PeriodDTO,
    PeriodModel,
    WeatherDTO,
    WeatherModel} from "../model"
import { getConnection, child, get } from "../../../layers/db"
