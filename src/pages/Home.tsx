import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather"
import { ForecastTwoDays } from "../components/ForecastTwoDays/ForecastTwoDays"
import { ForecastWeek } from "../components/ForecastWeek/ForecastWeek"
import { SearchBox } from "../components/SearchBox/SearchBox"
import { StyledHome } from "./StyledHome"

export const Home = () => {
    return (
        <StyledHome>
            <SearchBox />
            <hr />
            <CurrentWeather />
            {/* <ForecastTwoDays/>
            <ForecastWeek/>  */}
        </StyledHome>
    )
}
