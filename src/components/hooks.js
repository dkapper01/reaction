import React, { useContext } from 'react';
import Context from '../context';

export const useAppContext = () => {
  return useContext(Context);
};
