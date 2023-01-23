const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(lat) + '&lon=' + encodeURIComponent(lon) + '&units=metric&appid=2b41ae506c22ea48432806c28d5eebb4'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Establish conntection to Forecast API', undefined)
        } else if (body.message) {
            callback('Please provide proper search input', undefined)
        } else {
            callback(undefined, {
                currentTemp: body.current.temp,
                Date: Date(body.daily[0].dt),
                Description: body.daily[0].weather[0].description
            })

        }
    })
}

module.exports = forecast