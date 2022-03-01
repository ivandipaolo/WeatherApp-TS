import { useEffect, useState } from 'react';
import { findCity, getWeatherWeek, getWeatherTwoDays } from '../../helpers/searchers';
import { place } from '../../interfaces/components/PlacesInterface';



export const SearchBox = () => {

  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState<place[]>([])

  const getSuggestions = async (place: string) => {
    setSearch(place)
    if (place !== '') {
      let places: place[] = await findCity(search)
      setSuggestions(places)
    };
  }

  const handleSearch = (lat:number, lng:number) => {
    getWeatherTwoDays(lat,lng);
  }

  return (
    <>
      <input type='text' value={search} name='search' onChange={e => getSuggestions(e.target.value)} autoComplete='false' />
      {
        suggestions.map(sug => (
          <>
            <p key={sug.id}>{sug.name}</p>
            <button type="button" onClick={() => handleSearch(sug.lat, sug.lng)}>Buscar</button>
          </>
        ))
      }
    </>
  )
}
