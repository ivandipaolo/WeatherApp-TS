import { useEffect, useState, useRef } from 'react';
import { findCity } from '../../helpers/placeSearcher';
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
    if (search.trim() !== '' && selectedPlace) {
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
  
    useEffect(() => {
      if (selectedPlace.name !== '') {
        setFocusedInput(false)
        setShowSuggestions(false)
        setSearch('')
      }
    }, [selectedPlace])
    
  const onClick = (e: any) => {
    if (!focusedInput) {
      setSearch('')
      setFocusedInput(true)
      setSuggestions([]);
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
          autoComplete="off"
          placeholder={selectedPlace.name !== '' ? selectedPlace.name : 'Search for a place here'}
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
