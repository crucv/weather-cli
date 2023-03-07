import axios from 'axios'
import { getKeyValue, DICTIONARY } from './storage.service.js'

const getWeather = async (city) => {
    const token = await getKeyValue(DICTIONARY.token)
    if (!token) {
        throw new Error('Token is not defined, you can do that using -t [API_KEY] command')
    }
    
    const { data } = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            appid: token
        }
    })

    return data
}

export { getWeather }