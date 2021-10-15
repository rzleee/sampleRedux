import React from 'react'
import {getUsers} from './services/api/index'

import { 
  useDispatch,
  useSelector 
} from 'react-redux'

const testing = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const getUser = () => {
    getUsers()
      .then(res => {

        dispatch({
          type:"ADD_USER",
          newUser:res
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  

  return (
    <div className="App">
      <button
        onClick = { () => getUser()}
      >Testing</button>
      <button
        onClick = { () => console.log(user)}
      >HAHAHAHAHA</button>
    </div>
  );
}


export default testing;
