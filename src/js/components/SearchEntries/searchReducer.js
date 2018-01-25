var moment = require('moment');

const defaultState = {
  description:'',
  name: '',
  lat:'',
  lon:'',
  icon:'',
  id:'',
  temp:'',
  pressure:'',
  time:'',
  humidity:'',
  lowTemp:'',
  highTemp:'',
  wind:'',
  history:[]
   
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_DESCRIPTION':
      return {
        ...state,
        description: payload
      }


    case 'GET_WEATHER_FULFILLED':
      return {
        ...state,
        name: payload.name,
       time:payload.dt, 
        icon:payload.weather[0].icon,
        id:payload.weather[0].main,
        lat:payload.coord.lat,
        lon:payload.coord.lon,
        temp:payload.main.temp,
        pressure:payload.main.pressure,
        humidity:payload.main.humidity,
        lowTemp:payload.main.temp_min,
        highTemp:payload.main.temp_max,
        wind: payload.wind.speed,
        history: [
              ...state.history ,
              { name: payload.name,
                time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                icon:payload.weather[0].icon,
                id:payload.weather[0].main,
                lat:payload.coord.lat,
                lon:payload.coord.lon,
              temp:payload.main.temp,
              pressure:payload.main.pressure,
              humidity:payload.main.humidity,
              lowTemp:payload.main.temp_min,
              highTemp:payload.main.temp_max,
              wind: payload.wind.speed } 
            ]
      }

   

    default: {
      return state;
    }
  }
}
