import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather"
import { ForecastTwoDays } from "../components/ForecastTwoDays/ForecastTwoDays"
import { ForecastWeek } from "../components/ForecastWeek/ForecastWeek"
import { SearchBox } from "../components/SearchBox/SearchBox"
import { StyledHome } from "./StyledHome"
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store/store"
import Switch from "react-switch";
import { useState } from 'react';

export const Home = () => {
    const [checked, setChecked] = useState(false)
    const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)

    return (
        <StyledHome>
            <SearchBox />
            {
                selectedPlace.name !== ''
                &&
                <>
                    <CurrentWeather />
                    <div>
                        <div id='switch'>
                            <span id='forecast'>Forecast of the next
                            </span>
                            <Switch
                                onChange={() => setChecked(!checked)}
                                checked={checked}
                                height={40}
                                width={100}
                                borderRadius={6}
                                offColor='#83c2da'
                                onColor='#83c2da'
                                uncheckedIcon={
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            height: "100%",
                                            fontSize: 15,
                                            color: "white",
                                            paddingRight: 2,
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        48 Hours
                                    </div>
                                }
                                checkedIcon={
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100%",
                                            fontSize: 15,
                                            color: "white",
                                            paddingRight: 2,
                                            fontFamily: 'Poppins'
                                        }}
                                    >
                                        Week
                                    </div>
                                }
                            />
                        </div>
                        {/* {checked ? <p id='forecast'>Forecast for the next 7 days:</p> : <p id='forecast'>Forecast for the next 48 hours:</p>} */}
                        {
                            checked
                                ? <ForecastWeek />
                                : <ForecastTwoDays />
                        }
                    </div>
                </>
            }

        </StyledHome >
    )
}
