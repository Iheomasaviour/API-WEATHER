const searchInput = document.querySelector("#search")
const searchBtn =document.querySelector(".search-btn")
const weather =document.querySelector(".weather")
const temprature =document.querySelector(".temprature")
const description =document.querySelector(".description")
const humidity =document.querySelector(".humidity")
const pressure =document.querySelector(".pressure")
const country =document.querySelector(".country")
const deg =document.querySelector(".deg")
const speed =document.querySelector(".speed")
const apiKey = "21c048a83c9faa9f85f23adc1d5dc04f"

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    console.log(searchInput.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data =>{
        console.log(data)
    weather.textContent = "weather Type :" + data.weather[0].main
        description.textContent = "weather Description :" + data.weather[0].description
        temprature.textContent = "weather Temprature :" + data.main.temp
        humidity.textContent = "weather Humidity :" + data.main.humidity
        pressure.textContent = "weather Pressure :" + data.main.pressure
        country.textContent = "Country :" + data.sys.country
        deg.textContent = "weather Deg :" + data.wind.deg
        speed.textContent = "weather Speed :" + data.wind.speed
    })

    .catch(error => {
        console.error(`fetch error:`, error);

       
    });

    console.log(searchInput.value)
}
)

