import React, { useState } from 'react'
import Search from "./Search"
import Card from './Card';
import ErrorAlert from './ErrorAlert';

const WeatherPanel = () => {
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=c16f351d12cf35a860833e5248aa3d75&lang=es'
    let cityUrl = '&q='
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=c16f351d12cf35a860833e5248aa3d75&lang=es'

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [card, setCard] = useState(false)
    const [location, setLocation] = useState('')
    const [error, setError] = useState(false)
    const [openMessageError, setOpenMessageError] = useState(true);

    const getLocation = async (loc: string) => {
        setLoading(true)
        setLocation(loc)

        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather)
            .then((response) => {
                if (!response.ok) {
                    //@ts-ignore
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then((weatherData) => {
                setWeather(weatherData)
                setOpenMessageError(false)
            })
            .catch(() => {
                setLoading(false)
                setCard(false)
            })

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast)
            .then((response) => {
                if (!response.ok) {
                    //@ts-ignore
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then((forecastData) => {
                setForecast(forecastData)
                setLoading(false)
                setCard(true)
                setOpenMessageError(false)
            })
            .catch(() => {
                setLoading(false)
                setCard(false)
                setError(true)
                setOpenMessageError(true)
            })
    }

    return (
        <>
            {error && <ErrorAlert open={openMessageError} setOpen={setOpenMessageError} />}
            <Search location={getLocation} />
            <Card
                showData={card}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
            />
        </>
    )
}

export default WeatherPanel