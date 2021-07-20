import React from 'react'
import { useHandleChange } from '../hooks';

const Recipe = () => {
  const [name, handleName ] = useHandleChange('');
  const [ingredient1, handleIngredient1 ] = useHandleChange('');
  const [ingredient2, handleIngredient2 ] = useHandleChange('');
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={ name } onChange={ handleName } />
      </div>
      <div>
        <label htmlFor="ingredient1">Ingredient1</label>
        <input type="text" value={ ingredient1 } onChange={ handleIngredient1 } />
      </div>
      <div>
        <label htmlFor="ingredient2">Ingredient2</label>
        <input type="text" value={ ingredient2 } onChange={ handleIngredient2 } />
      </div>
    </form>
  )
}

export default Recipe
