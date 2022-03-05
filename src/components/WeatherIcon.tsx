import { FC, useState, useEffect } from 'react';
import { iconsProvider } from '../helpers/iconsProvider';
import { StyledWeatherIcon } from './StyledWeatherIcon';

interface Props {
    hour: number
    id: keyof typeof iconsProvider.day
}

export const WeatherIcon: FC<Props> = ({ hour, id }) => {
    const [image, setImage] = useState()
    const { day, night } = iconsProvider

    useEffect(() => {
        if (hour > 6 && hour < 19 && id > 200) {
            setImage(require(`../assets/weather/${day[id]}.svg`))
        } else {
            setImage(require(`../assets/weather/${night[id]}.svg`))
        }
    }, [id])
    return (
        <StyledWeatherIcon src={image && image} alt="" />
    )
}
