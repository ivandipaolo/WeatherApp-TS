import { StyledSuggestion } from './StyledSearchBox';
import { IPlaceMapped } from '../../interfaces/components/PlacesInterface';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../helpers/weatherSearcher';
import { setSelectedPlace } from '../../redux/actions/placeActions';
import { setCurrentWeather, setWeekWeather, setTwoDaysWeather } from '../../redux/actions/weatherActions';
import { MutableRefObject } from 'react';

interface Props {
    suggestion: IPlaceMapped;
    ref?: MutableRefObject<any>;
}

const Suggestion: React.FC<Props> = ({ suggestion }) => {
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

    return (
        <StyledSuggestion onClick={handleSelectPlace}>
            <p>
                {suggestion.name}
            </p>
        </StyledSuggestion>
    );
};

export default Suggestion;