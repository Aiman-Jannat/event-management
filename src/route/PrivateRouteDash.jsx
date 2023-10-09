import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';


const PrivateRouteDash = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading)
    return <span className="loading loading-bars loading-lg"></span>;
    if(user)
    return children;
toast("Please login first");
    return (
        <div>
            
            <Navigate to='/login'></Navigate>
        
        <ToastContainer></ToastContainer>
        </div>
   
    );
};

export default PrivateRouteDash;