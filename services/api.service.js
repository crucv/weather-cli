import axios from 'axios'
import { getKeyValue, DICTIONARY } from './storage.service.js'

const token = await getKeyValue(DICTIONARY.token)
const city = await getKeyValue(DICTIONARY.city)

const getWeather = async () => {
    
    if (!token) {
        throw new Error('Token is not defined, you can do that using -t [API_KEY] command')
    }
    
    const { data } = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            appid: token
        }
    })
    
    return {
        lat: data[0]['lat'],
        lon: data[0]['lon']
    }
}

const getWeatherData = async (lat,lon) => {
    if (!token) {
        throw new Error('Token is not defined, you can do that using -t [API_KEY] command')
    }
    
    const weather = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: lat,
            lon: lon,
            appid: token
        }
    })
    console.log(weather['data'])
    return weather['data']
}

export { getWeather, getWeatherData }