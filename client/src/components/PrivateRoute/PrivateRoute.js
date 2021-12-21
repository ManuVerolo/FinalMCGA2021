import React from 'react'
import { Route, Navigate  } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Home from '../../components/Home/Home'

const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useAuth()
    return currentUser ? <Home /> : <Navigate to="/login" />;
}

export default PrivateRoute
