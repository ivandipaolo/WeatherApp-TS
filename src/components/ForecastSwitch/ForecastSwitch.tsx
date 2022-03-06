import Switch from 'react-switch';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForecast } from '../../redux/actions/uiActions';
import dark from '../../styled/themes/dark'
import light from '../../styled/themes/light'
import { RootState } from '../../redux/store/store';

export const ForecastSwitch = () => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState<boolean>(true)

    const { themeMode } = useSelector((state: RootState) => state.uiInterface)

    const handleCheck = (): void => {
        setChecked(!checked)
        checked
            ?
            dispatch(setForecast('HOUR'))
            :
            dispatch(setForecast('DAYS'))
    }

    return (
        <div id='switch'>
            <span id='forecast'>Forecast of the next</span>
            <Switch
                onChange={handleCheck}
                checked={checked}
                height={40}
                width={100}
                borderRadius={30}
                offColor={
                    themeMode === 'LIGHT'
                        ? light.colors.switch.secondary
                        : dark.colors.switch.secondary
                }
                onColor={
                    themeMode === 'LIGHT'
                        ? light.colors.switch.secondary
                        : dark.colors.switch.secondary
                }
                offHandleColor={
                    themeMode === 'LIGHT'
                        ? light.colors.switch.primary
                        : dark.colors.switch.primary
                }
                onHandleColor={
                    themeMode === 'LIGHT'
                        ? light.colors.switch.primary
                        : dark.colors.switch.primary
                }
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
    )
}
