import React, { useContext } from 'react';
import { ContextProvider } from '../../Firbase/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(ContextProvider)
    const location = useLocation()
    if (loading) {
        return <>
            <button type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    {/* <!-- ... --> */}
                </svg>
                Processing...
            </button>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;