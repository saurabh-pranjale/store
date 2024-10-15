import React, { useContext } from 'react'
import { authContext } from './store/auth'

const Dash = () => {
    const {state} = useContext(authContext)
  return (
    <div>{state}</div>
  )
}

export default Dash