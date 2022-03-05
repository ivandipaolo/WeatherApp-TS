import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchOutline } from 'react-icons/io5';

import { IPlaceMapped } from '../../interfaces/components/PlacesInterface';

import Suggestion from './Suggestion';
import { findCity } from '../../helpers/placeSearcher';
import { getWeather } from '../../helpers/weatherSearcher';
import { setCurrentWeather, setWeekWeather, setTwoDaysWeather } from '../../redux/actions/weatherActions';
import { setSelectedPlace } from '../../redux/actions/placeActions';
import { StyledSearchBox, StyledInput, StyledSuggestions } from './StyledSearchBox';

export const SearchBox = () => {

  const dispatch = useDispatch();

  const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)

  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<IPlaceMapped[]>([])
  const [focusedInput, setFocusedInput] = useState<boolean>(false)
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

  useEffect(() => {
    if (search.trim() !== '') {
      setFocusedInput(true)
      const timer = setTimeout(async () => {
        let places: IPlaceMapped[] = await findCity(search)
        setShowSuggestions(true)
        setSuggestions(places)
      }, 250);
      return () => clearTimeout(timer)
    }
  }, [search])

  useEffect(() => {
    setTimeout(() => {
      setSearch('')
      setShowSuggestions(false)
      setFocusedInput(false)
    }, 300);
  }, [selectedPlace])

  const handleClick = (e: any) => {
    if (!focusedInput) {
      setSearch('')
      setFocusedInput(true)
      setSuggestions([]);
    }
  };

  const handleBlur = (): void => {
    setTimeout(() => {
      setShowSuggestions(false)
      setFocusedInput(false)
    }, 350);
  }

  const handleKeyDown = async (e: any) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      dispatch(setSelectedPlace(suggestions[0]));
      const weather = await getWeather(suggestions[0].lat, suggestions[0].lng);
      if (weather) {
        dispatch(setCurrentWeather(weather.current));
        dispatch(setWeekWeather(weather.week));
        dispatch(setTwoDaysWeather(weather.twoDays));
      }
    }
  }

  return (
    <StyledSearchBox
      onBlur={handleBlur}
    >
      <StyledInput>
        <IoSearchOutline id="searchIcon" size={35} color='black' />
        <input
          type='text'
          value={search}
          name='search'
          onClick={e => handleClick(e)}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
          autoComplete="off"
          placeholder={selectedPlace.name !== '' ? selectedPlace.name : 'Search for a place here'}
        />
      </StyledInput>
      {showSuggestions &&
        <StyledSuggestions>
          {
            suggestions.map((sugg
            ) => (
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
