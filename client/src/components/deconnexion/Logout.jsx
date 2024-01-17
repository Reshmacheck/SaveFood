import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Logout = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()


    useEffect(() => {
        console.log('lolo')
        setUser(null)
        console.log('lolo')
        navigate('/')
        
    })

    return <></>;
}

export default Logout