//Get All Values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//Get API Key By Login To OpenWeather.org
const API_Key = "d7cea29288b2ab1ffcf358102f20922d";

//Now Add Event Listener
button.addEventListener('click', () => {

    //Get Input Value
    const cityInput = inputTxt.value;
    // console.log(cityInput);

    //Now Fetch Through Get API 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            //This line clear the input field
            inputTxt.value = " ";

            //This line show All  the JSON data you can use it such as pressure,air,temperature etc. For now we use description, City name and temperature
            showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                   
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `;

        })
        .catch(err => alert("Wrong city name!"));

});
