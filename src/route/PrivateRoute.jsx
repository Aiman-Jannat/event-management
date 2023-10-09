import  { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    const {userr, loading} = useContext(AuthContext);
    if(loading)
    return <span className="loading loading-bars loading-lg"></span>;
    if(userr)
    return children;

    return <Navigate to='/login'></Navigate>
        
        
   
    
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children:PropTypes.node
}