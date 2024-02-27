const apikey = "be8bd7472bd4eecd75df0b3432d166ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const backgroundImg = document.querySelector(".main1");
const crossbtn = document.querySelector(".crosbtn");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".city").innerHTML = data.name;
    var cel = data.main.temp - 273.15;
    document.querySelector(".temp").innerHTML = Math.round(cel) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("main1").style
    let weather = data.sys.sunrise

    // var current = {
    //     "sunrise":1591140098,
    //     "sunset":1591188490,
    //   }
      
    //   if (weather!== data.sys.sunrise) {
    //     console.log('Day Time');
    //     alert('Day Time')
    //   } else {
    //     console.log('Night Time');
    //     alert('Night Time')
    //   }
    if (data.sys.sunrise===data.sys.sunrise) {
    backgroundColor="blue"
   } else {
    backgroundColor="green"
   }

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png"
    }
    
}
// Enter press Key function 
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
  });


  searchbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkWeather(searchbox.value);
      }
    });
// Cross button function 
crossbtn.addEventListener('click',()=>{
    searchbox.value ='';
})

searchbox.addEventListener('input', () => {
    clearButton.display = 'none';
});


var city = "karachi"
checkWeather(city);
searchbtn.addEventListener("click", () => {

    checkWeather(searchbox.value);
})
