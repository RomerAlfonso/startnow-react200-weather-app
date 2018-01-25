import React from 'react';
import SearchEntries from './components/searchentries';
import CityHistory from './components/cityhistory';
import CityInformation from './components/cityinformation'; 

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-3' >
          <h1 className='display-3 text-center'>Origin Weather Application</h1>
          <p className='text-center pt-3'>Always know if you'll need an umbrella!</p>
        </div>

        <SearchEntries />

        <div className="container mt-5">
          <div className="row mb-3">

            <div className="col">

              <CityInformation/>
            </div>

            <div className="col">
              <CityHistory/>

            </div>
          </div>


        </div>

      </div>
    );
  }
}
