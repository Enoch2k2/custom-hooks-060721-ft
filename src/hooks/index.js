import { useState } from 'react';

export const useHandleChange = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(e.target.value);
  }


  return [state, handleChange]
}