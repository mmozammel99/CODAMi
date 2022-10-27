import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const PrivetRouter = ({ children }) => {
    const { user,loader } = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <div className="w-16 h-16 mx-auto my-96 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivetRouter;