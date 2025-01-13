import { createContext, Dispatch, SetStateAction } from 'react';

interface MovingAverageContextType {
  useMovingAverage: boolean,
  setUseMovingAverage: Dispatch<SetStateAction<boolean | null>>
}

export const MovingAverageContext = createContext({
  useMovingAverage: true,
  setUseMovingAverage: () => { console.error('Using default context') }
} as MovingAverageContextType);
