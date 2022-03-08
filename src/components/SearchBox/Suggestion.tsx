import { useDispatch } from 'react-redux';

import { StyledSuggestion } from './StyledSearchBox';
import { IPlaceMapped } from '../../interfaces/components/PlacesInterface';

import { getWeather } from '../../helpers/weatherSearcher';
import { setSelectedPlace } from '../../redux/actions/placeActions';
import { setCurrentWeather, setWeekWeather, setTwoDaysWeather } from '../../redux/actions/weatherActions';

interface Props {
    suggestion: IPlaceMapped;
    handleClickOutside: Function
    index: number
}

const Suggestion: React.FC<Props> = ({ suggestion, index }) => {
    const dispatch = useDispatch();
    const { lat, lng } = suggestion;

    const handleSelectPlace = async () => {
        const weather = await getWeather(lat, lng);
        if (weather) {
            dispatch(setSelectedPlace(suggestion));
            dispatch(setCurrentWeather(weather.current));
            dispatch(setWeekWeather(weather.week));
            dispatch(setTwoDaysWeather(weather.twoDays));
        }
    }

    const handleKeyDown = async (e: any) => {
        if (e.key === 'Enter' || e.keyCode === 32) {
            dispatch(setSelectedPlace(suggestion));
            const weather = await getWeather(suggestion.lat, suggestion.lng);
            if (weather) {
                dispatch(setCurrentWeather(weather.current));
                dispatch(setWeekWeather(weather.week));
                dispatch(setTwoDaysWeather(weather.twoDays));
            }
        }
    }

    return (
        <StyledSuggestion
            onClick={handleSelectPlace}
            tabIndex={index}
            onKeyDown={e => handleKeyDown(e)}
        >
            <p>
                {suggestion.name}
            </p>
        </StyledSuggestion>
    );
};

export default Suggestion;