import { FC, useState } from 'react';
import { iconsProvider } from '../helpers/iconsProvider';
import { StyledWeatherIcon } from './StyledWeatherIcon';

interface Props {
    hour: number
    id: number
    icon: string
}

export const WeatherIcon: FC<Props> = ({ hour, id, icon }) => {
    const [image, setImage] = useState()
    const { day, night } = iconsProvider

    const time = icon.slice(-1)

    setTimeout(() => {
        if (time === 'n') {
            setImage(require(`../assets/weather/${night[id as keyof typeof iconsProvider.day]}.svg`))
        } else {
            setImage(require(`../assets/weather/${day[id as keyof typeof iconsProvider.day]}.svg`))
        }
    }, 200);


    return (
        <>
            <StyledWeatherIcon src={image} alt="" />
        </>
    )
}
