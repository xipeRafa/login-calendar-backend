import { useEffect } from 'react';
import { Navigate, Route, Routes,} from 'react-router-dom';

import { LoginPage, RegisterPage } from '../auth';
import { CalendarPage } from '../calendar';

import { useAuthStore } from '../hooks';


const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    console.log('status:', status)
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])

    
    if ( status === 'checking' ) {
        return <h3>Cargando...</h3>
    }

    return (
        <Routes>
            {
                status === 'not-authenticated'  
                    ?   <>
                            <Route path="/auth/*"   element={ <LoginPage /> } />
                            <Route path="/register" element={ <RegisterPage /> } />
                            <Route path="/*"        element={ <Navigate to="/auth/login" /> } />
                        </>
                    :   <>
                            <Route path="/"  element={ <CalendarPage /> } />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
            }
        </Routes>
    )
}

export default AppRouter