import { useState } from "react"
import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather"
import { ForecastTwoDays } from "../components/ForecastTwoDays/ForecastTwoDays"
import { ForecastWeek } from "../components/ForecastWeek/ForecastWeek"
import { SearchBox } from "../components/SearchBox/SearchBox"
import { StyledHome } from "./StyledHome"
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store/store"

export const Home = () => {
    const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)


    return (
        <StyledHome>
            <SearchBox />
            <hr />
            {
                selectedPlace.name !== ''
                &&
                <>
                    <CurrentWeather/>
                    {/* <ForecastTwoDays/>
                <ForecastWeek/>  */}
                </>
            }

        </StyledHome>
    )
}
