import { useEffect, useState, useRef } from 'react';
import { findCity } from '../../helpers/placeSearcher';
// import { getWeatherTwoDays } from '../../helpers/weatherSearcher';
import { place } from '../../interfaces/components/PlacesInterface';
import { StyledSearchBox, StyledInput, StyledSuggestions } from './StyledSearchBox';
import { IoSearchOutline } from 'react-icons/io5';
import Suggestion from './Suggestion';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const SearchBox = () => {

  const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)

  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<place[]>([])
  const [focusedInput, setFocusedInput] = useState<boolean>(false)
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false)
  
  useEffect(() => {
    selectedPlace.name !== '' &&
      setSearch(selectedPlace.name)
  }, [selectedPlace])

  useEffect(() => {
    if (search !== '') {
      setShowSuggestions(true)
      const timer = setTimeout(async () => {
        let places: place[] = await findCity(search)
        setSuggestions(places)
      }, 250)
      return () => clearTimeout(timer)
    } else {
      setSearch('')
    }
  }, [search])

  const onBlur = () => {
    setTimeout(() => {
      setFocusedInput(false)
      setShowSuggestions(false)
    }, 300);
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
          onChange={e => setSearch(e.target.value)}
          // onChange={e => getSuggestions(e.target.value)}
          onBlur={onBlur}
          autoComplete="off"
          placeholder='Search for a place here'
        />
        <IoSearchOutline id="searchIcon" size={40} color='black' />
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
