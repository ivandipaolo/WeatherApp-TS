import { useState } from 'react';
import { findCity } from '../../helpers/placeSearcher';
// import { getWeatherTwoDays } from '../../helpers/weatherSearcher';
import { place } from '../../interfaces/components/PlacesInterface';
import { StyledSearchBox, StyledInput, StyledSuggestions } from './StyledSearchBox';
import { IoSearchOutline } from 'react-icons/io5';
import Suggestion from './Suggestion';

export const SearchBox = () => {

  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<place[]>([])
  const [focusedInput, setFocusedInput] = useState<boolean>(false)
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

  const getSuggestions = async (place: string) => {
    if (place !== '') {
      setShowSuggestions(true)
      let places: place[] = await findCity(place)
      setSuggestions(places)
      setSearch(place)
    };
  }

  const onBlur = () => {
    setTimeout(() => {
      setFocusedInput(false)
      setShowSuggestions(false)
    }, 100);
  }

  const onClick = (e: any) => {
    if (!focusedInput) {
      setFocusedInput(true)
      setSuggestions([]);
      setSearch(e.target.innerText);
    }
  };

  return (
    <StyledSearchBox>
      <StyledInput>
        <input
          type='text'
          value={search}
          name='search'
          onClick={e => onClick(e)}
          onChange={e => getSuggestions(e.target.value)}
          onBlur={onBlur}
          autoComplete="off"
        />
        <IoSearchOutline id="searchIcon" />
      </StyledInput>
      {showSuggestions &&
        <StyledSuggestions>
          {
            suggestions.map((sugg) => (
              <Suggestion
                key={sugg.id}
                suggestion={sugg}
              />
            ))
          }
        </StyledSuggestions>
      }
    </StyledSearchBox>
  )
}
