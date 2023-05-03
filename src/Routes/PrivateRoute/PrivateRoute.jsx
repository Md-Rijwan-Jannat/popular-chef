import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='text-center text-5xl h-72 flex-col items-center justify-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;