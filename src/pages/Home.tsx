import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather"
import { ForecastTwoDays } from "../components/ForecastTwoDays/ForecastTwoDays"
import { ForecastWeek } from "../components/ForecastWeek/ForecastWeek"
import { SearchBox } from "../components/SearchBox/SearchBox"
import { StyledHome } from "./StyledHome"
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store/store"
import { ThemeToggle } from '../components/ThemeToggle/ThemeSwitch';
import { ForecastSwitch } from '../components/ForecastSwitch/ForecastSwitch';
import { Welcome } from '../components/Welcome/Welcome';

export const Home = () => {
    const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)
    const { forecast } = useSelector((state: RootState) => state.uiInterface)
    return (
        <StyledHome>
            <SearchBox />
            <ThemeToggle />
            {
                selectedPlace.name !== ''
                ?
                <>
                    <CurrentWeather />
                    <div>
                        <ForecastSwitch />
                        {
                            forecast === 'DAYS'
                                ? <ForecastWeek />
                                : <ForecastTwoDays />
                        }
                    </div>
                </>
                :
                <Welcome/>
            }

        </StyledHome >
    )
}
