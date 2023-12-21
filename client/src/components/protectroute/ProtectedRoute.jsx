import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const ProtectedRoute = ({children}) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()


    useEffect(() => {
        if (user === null) {
            // setFlashMessage('Access denied')
            navigate('/')
        }
    })

    return <>{children}</>;
}

export default ProtectedRoute