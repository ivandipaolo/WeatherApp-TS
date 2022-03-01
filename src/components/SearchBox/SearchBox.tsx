import { useEffect, useState } from 'react';
import { findCity } from '../../helpers/searchers';
import { place } from '../../interfaces/components/PlacesInterface';



export const SearchBox = () => {

  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState<place[]>([])
  
  const getSuggestions = async (place:string) => {
    setSearch(place)
    if (place !== '') {
      let places: place[] = await findCity(search)
      setSuggestions(places)
    };
  } 

  return (
    <>
      <input type='text' value={search} name='search' onChange={e => getSuggestions(e.target.value)} autoComplete='false' />
      {
        suggestions.map(sug => (
          <p>{sug.name}</p>
        ))
      }
    </>
  )
}
