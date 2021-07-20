import React from 'react'
import { useHandleChange } from '../hooks';

const Signup = () => {
  const [username, handleUsername] = useHandleChange('');
  const [password, handlePassword] = useHandleChange('');

  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={ username } onChange={ handleUsername } />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={ password } onChange={ handlePassword } />
      </div>

      <input type="submit" value="Signup" />
    </form>
  )
}

export default Signup
