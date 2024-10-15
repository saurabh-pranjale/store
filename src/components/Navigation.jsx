import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { authContext } from '../store/auth'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const {state,setState} = useContext(authContext)
    const navigate = useNavigate()
   
    const A = () =>{
        setState(false)
        navigate('/')
    }

  return (
    <div className='d-flex flex-row justify-content-center align-items-center py-4 bg-warning border border-2 border-dark'>
        {state ?<Button variant={'outline-dark'} onClick={A} >Logout</Button> : <Button variant={'outline-dark'} onClick={()=>{navigate('/')}}>Login</Button>}
    
    
    </div>
  )
}

export default Navigation