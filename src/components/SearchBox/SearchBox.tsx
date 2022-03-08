import { useEffect, useState, useRef } from 'react';
import { RootState } from '../../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchOutline } from 'react-icons/io5';

import { IPlaceMapped } from '../../interfaces/components/PlacesInterface';

import { StyledSearchBox, StyledInput, StyledSuggestions } from './StyledSearchBox';
import Suggestion from './Suggestion';
import { findCity } from '../../helpers/placeSearcher';
import { getWeather } from '../../helpers/weatherSearcher';
import useOnClickOutside from '../../helpers/hooks/useOnClickOutside';
import { setSelectedPlace } from '../../redux/actions/placeActions';
import { setCurrentWeather, setWeekWeather, setTwoDaysWeather } from '../../redux/actions/weatherActions';

export const SearchBox = () => {

  const dispatch = useDispatch();

  const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)

  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<IPlaceMapped[]>([])
  const [focusedInput, setFocusedInput] = useState<boolean>(false)
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

  const boxRef = useRef(null)

  useEffect(() => {
    if (search.trim() !== '') {
      setFocusedInput(true)
      const timer = setTimeout(async () => {
        let places: IPlaceMapped[] = await findCity(search)
        setShowSuggestions(true)
        setSuggestions(places)
      }, 150);
      return () => clearTimeout(timer)
    }
  }, [search])

  useEffect(() => {
    setTimeout(() => {
      setSearch('')
      setShowSuggestions(false)
      setFocusedInput(false)
    }, 200);
  }, [selectedPlace])

  const handleClick = (e: any) => {
    if (!focusedInput) {
      setSearch('')
      setFocusedInput(true)
      setSuggestions([]);
    }
  };

  const handleClickOutside = (): void => {
    setShowSuggestions(false)
    setFocusedInput(false)
  }

  const handleKeyDown = async (e: any) => {
    if (e.key === 'Enter') {
      dispatch(setSelectedPlace(suggestions[0]));
      const weather = await getWeather(suggestions[0].lat, suggestions[0].lng);
      if (weather) {
        dispatch(setCurrentWeather(weather.current));
        dispatch(setWeekWeather(weather.week));
        dispatch(setTwoDaysWeather(weather.twoDays));
      }
    }
  }

  useOnClickOutside(boxRef, handleClickOutside)

  return (
    <StyledSearchBox
    >
      <StyledInput
        ref={boxRef}
      >
        <IoSearchOutline id="searchIcon" size={35} color='white' />
        <input
          type='text'
          value={search}
          name='search'
          onClick={e => handleClick(e)}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
          autoComplete="off"
          placeholder={selectedPlace.name !== '' ? selectedPlace.name : 'Search for a place here'}
          tabIndex={1}
        />
      </StyledInput>
      {showSuggestions &&
        <StyledSuggestions
          ref={boxRef}
        >
          {
            suggestions.map((sugg, index) => (
              <Suggestion
                key={sugg.id}
                suggestion={sugg}
                // ref={boxRef}
                handleClickOutside={handleClickOutside}
                index={index+2}
              />
            ))
          }
        </StyledSuggestions>
      }
    </StyledSearchBox>
  )
}
