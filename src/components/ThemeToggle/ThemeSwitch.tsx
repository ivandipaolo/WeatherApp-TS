import { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { StyledThemeToggle } from './StyledThemeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from '../../redux/actions/uiActions';
import { WeatherIcon } from '../WeatherIcon';
import dark from '../../styled/themes/dark'
import light from '../../styled/themes/light'
import { RootState } from '../../redux/store/store';


export const ThemeToggle = () => {
  const [checked, setChecked] = useState<boolean>(true)
  const dispatch = useDispatch();

  const { themeMode } = useSelector((state: RootState) => state.uiInterface)

  const handleCheck = () => {
    setChecked(!checked)
    checked === true
      ? dispatch(setThemeMode('LIGHT'))
      : dispatch(setThemeMode('DARK'))
  }



  return (
    <StyledThemeToggle>
      <Switch
        onChange={handleCheck}
        checked={checked}
        height={40}
        width={80}
        borderRadius={45}
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
              fontSize: 25,
              color: "white",
              paddingRight: 2,
              fontFamily: 'Poppins'
            }}
          >
            <WeatherIcon id={800} icon='01d' size={30} />
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 25,
              color: "white",
              paddingRight: 2,
              fontFamily: 'Poppins'
            }}
          >
            <WeatherIcon id={800} icon='01n' size={30} />
          </div>
        }
      />
    </StyledThemeToggle>
  )
}
