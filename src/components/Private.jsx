import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { authContext } from '../store/auth'

const Private = () => {
    const { state } = useContext(authContext)
    return (
        <div>
            {state ? <Outlet /> : <h1>please Login</h1>}

        </div>

    )
}

export default Private