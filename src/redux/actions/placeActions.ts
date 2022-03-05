import { IPlaceMapped } from '../../interfaces/components/PlacesInterface';
import { Types } from '../types/types';

export const setSelectedPlace = (data:IPlaceMapped) => ({
  type: Types.setSelectedPlace,
  payload: data
});