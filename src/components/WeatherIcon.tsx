import { FC, useState } from 'react';
import { iconsProvider } from '../helpers/iconsProvider';
import { Loader } from './Loader/Loader';

interface Props {
    id: number
    icon: string
    size: number
}

export const WeatherIcon: FC<Props> = ({ id, icon, size }) => {
    const [image, setImage] = useState()
    const { day, night } = iconsProvider

    const time = icon.slice(-1)

    setTimeout(() => {
        if (time === 'n') {
            setImage(require(`../assets/weather/${night[id as keyof typeof iconsProvider.day]}.svg`))
        } else {
            setImage(require(`../assets/weather/${day[id as keyof typeof iconsProvider.day]}.svg`))
        }
    }, 300);


    return (
        image
            ? <img src={image} alt="" width={size} height={size} />
            : <Loader />
    )
}
