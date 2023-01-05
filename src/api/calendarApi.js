import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()




const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

(async()=>{
    const { data } = await calendarApi.get('/register') 
    console.log('usuarios Registrados', data)
})()

 

// Todo: configurar interceptores
calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers, 
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default calendarApi;



