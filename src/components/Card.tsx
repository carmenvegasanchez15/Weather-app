import Spinner from "./Spinner"

interface CardProps {
    loadingData: boolean,
    showData: boolean,
    weather: any,
    forecast: any
}

const Card = (props: CardProps) => {
    const { loadingData, showData, weather, forecast } = props

    //Obtener fecha
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = day + '/' + month + '/' + year

    let url, iconUrl, iconUrl3, iconUrl6, iconUrl9, forecastDate3, forecastDate6, forecastDate9 = ''

    if (loadingData) {
        return <Spinner />
    }

    if (showData) {
        url = 'https://api.openweathermap.org/img/w/'
        iconUrl = url + weather.weather[0].icon + '.png'

        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png'
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png'
        iconUrl9 = url + forecast.list[3].weather[0].icon + '.png'

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13)
    }

    return (
        <div className="mt-5">
            {showData === true ? (
                <div className="container text-light">
                    <div className="card mb-3 mx-auto">
                        <div className="row g-0">
                            <div className="col-md-4 ">
                                <h3 className="card-title">{weather.name}</h3>
                                <p className="card-date">{date}</p>
                                <h1 className="card-temp">
                                    {(weather.main.temp - 273.15).toFixed(1)} ??C
                                </h1>
                                <p className="card-desc">
                                    <img src={iconUrl} alt="Icono" />
                                    {weather.weather[0].description}
                                </p>
                                <img
                                    src="https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="img-fluid rounder-start"
                                    alt="Imagen ciudad"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">
                                        Temperatura m??xima:{' '}
                                        {(weather.main.temp_max - 273.15).toFixed(1)} ??C
                                    </h5>
                                    <h5 className="card-text">
                                        Temperatura m??nima:{' '}
                                        {(weather.main.temp_min - 273.15).toFixed(1)} ??C
                                    </h5>
                                    <h5 className="card-text">
                                        Sensaci??n t??rmica:{' '}
                                        {(weather.main.feels_like - 273.15).toFixed(1)} ??C
                                    </h5>
                                    <h5 className="card-text">
                                        Humedad: {weather.main.humidity} %
                                    </h5>
                                    <h5 className="card-text">
                                        Velocidad del viento: {weather.wind.speed} m/s
                                    </h5>
                                </div>
                                <hr />
                                <div className="row mt-4">
                                    <div className="col">
                                        <p>{forecastDate3} h</p>
                                        <p className="description">
                                            <img src={iconUrl3} alt="icono 3" />
                                            {forecast.list[1].weather[0].description}
                                        </p>
                                        <p className="temp">
                                            {(forecast.list[1].main.temp - 273.15).toFixed(1)} ??C
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate6} h</p>
                                        <p className="description">
                                            <img src={iconUrl6} alt="icono 6" />
                                            {forecast.list[2].weather[0].description}
                                        </p>
                                        <p className="temp">
                                            {(forecast.list[2].main.temp - 273.15).toFixed(1)} ??C
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate9} h</p>
                                        <p className="description">
                                            <img src={iconUrl9} alt="icono 9" />
                                            {forecast.list[3].weather[0].description}
                                        </p>
                                        <p className="temp">
                                            {(forecast.list[3].main.temp - 273.15).toFixed(1)} ??C
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2>No hay datos</h2>
            )}
        </div>
    )
}

export default Card