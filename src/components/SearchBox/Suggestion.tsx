import { StyledSuggestion } from './StyledSearchBox';
import { place } from '../../interfaces/components/PlacesInterface';
import { useDispatch } from 'react-redux';
import { setSelectedPlace } from '../../redux/actions/uiInterfaceAuth/placeActions';

interface eachSuggestion {
    suggestion: place;
}

const Suggestion: React.FC<eachSuggestion> = ({ suggestion }) => {

    const dispatch = useDispatch();

    const handleSelectPlace = () => {
        dispatch(setSelectedPlace(suggestion));
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