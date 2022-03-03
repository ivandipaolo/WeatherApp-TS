import { place } from '../../interfaces/components/PlacesInterface';
import { Types } from '../types/types';

export const setSelectedPlace = (data: place) => ({
  type: Types.setSelectedPlace,
  payload: data
});