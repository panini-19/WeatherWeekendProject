const form = document.querySelector('form')
const table = document.querySelector('.weather')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data_input = form.querySelector('input').value 
    getWeatherData(data_input)
})


const conversion = (kelvin) => {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(1) 
}

const weatherData = (weather) =>{
    table.innerHTML = ''

const cityName = document.createElement('tr')
cityName.innerHTML = `<td> City: </td> <td>${weather.name}</td>`
table.appendChild(cityName)

const cityTemp = document.createElement('tr')
cityTemp.innerHTML = `<td> Current Temp: </td> <td>${conversion(weather.main.temp)}°F</td>`
table.appendChild(cityTemp)

const tempMax = document.createElement('tr')
tempMax.innerHTML = `<td> Daily High: </td> <td> ${conversion(weather.main.temp_max)}°F</td>`
table.appendChild(tempMax)

const tempMin = document.createElement('tr')
tempMin.innerHTML = `<td> Daily Low: </td> <td> ${conversion(weather.main.temp_min)}°F</td>`
table.appendChild(tempMin)

const humidity = document.createElement('tr')
humidity.innerHTML = `<td> Humidity: </td> <td> ${weather.main.humidity}%</td>`
table.appendChild(humidity)

const forecast = document.createElement('tr')
forecast.innerHTML = `<td> Forecast: </td> <td> ${weather.weather[0].description}</td>`
table.appendChild(forecast)
}
const getWeatherData = async (city) => {
    const APIKEY = '09bc2aa6c78028e851fc4335aa5322a8'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const data = await response.json()
weatherData(data)
}

