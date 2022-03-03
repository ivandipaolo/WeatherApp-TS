import { StyledSuggestion } from './StyledSearchBox';
import { place } from '../../interfaces/components/PlacesInterface';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../helpers/weatherSearcher';
import { setSelectedPlace } from '../../redux/actions/placeActions';
import { setCurrentWeather, setWeekWeather, setTwoDaysWeather } from '../../redux/actions/weatherActions';

interface eachSuggestion {
    suggestion: place;
}

const Suggestion: React.FC<eachSuggestion> = ({ suggestion }) => {

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