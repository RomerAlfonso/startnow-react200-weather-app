// Action Creators
import axios from 'axios';

export const updateSearchDescription = (description) => {
  return {
    type: 'UPDATE_SEARCH_DESCRIPTION',
    payload: description
  }
}

export function getWeather(cityName) {
  console.log(cityName)
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=479997ed7fb951b91d1f3572a943accf`)
    .then(response => response.data)
    .catch(error => alert('Type city name agian!'))
  }
}



// const getWeather = () => ( { 
//   type: 'GET_WEATHER',
//   payload: axios.get("api.openweathermap.org/data/2.5/weather?q={city name}&appid=479997ed7fb951b91d1f3572a943accf",{

//   })
// })
//     .then((response) => { 
//       response.data.forEach((city) =>{
//          const dataWeNeed = {
//           //  id: city.unique_id, 
//           //  name: city.name,
//           //  state: city.state,
//           //  temperature: place.temperature,  
//           //  pressure:city.units.pressure,
//           //  humidity:city.atmosphere.humidity ,
//           //  lowTemp: city.temperatureLow,
//           //  highTemp:city.temperatureHigh,
//           //  wind:city.wind.speed 
//          }
//         console.log(response)
//      })    
//     });


