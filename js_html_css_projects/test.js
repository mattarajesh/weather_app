const apiKey = "be61a32c67af928c5b9c8793b066c9a3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".weather-icon"); 



async function checkWeather(city) {
    const response  = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }else{
        var data = await response.json();





    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";   
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   

    if (wheatherIcon) {
        if (data.weather[0].main == "Clouds") {
            wheatherIcon.src = "./images/cloudy.png"; 
        } else if (data.weather[0].main == "Clear") {  // "Day" is incorrect, it should be "Clear"
            wheatherIcon.src = "./images/day.png";
        } else if (data.weather[0].main == "Rain") {
            wheatherIcon.src = "./images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            wheatherIcon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            wheatherIcon.src = "./images/mist.png";
        }
    } else {
        console.error("Element with class 'weather-icon' not found.");
    }
    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }



    
    


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

      
