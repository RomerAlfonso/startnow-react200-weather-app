import React from 'react';



class CityInformation extends React.Component {
    render() {
        const {searchInfo} = this.props;
       
        return (
            <div className="col">

                <div className="card border-info">
                    <div className="card-header text-white bg-info">
                        City Information
                    </div>
                    <div className="card-body">
                        <div className="col-9">
                            <h1 className="card-title text-center">  <img className="card-text text-center " src={`http://openweathermap.org/img/w/${searchInfo.icon}.png`}/>  {searchInfo.name} </h1>
                           
                        </div>
                        <div className="col-9">
                            
                            <p className="card-text text-center">Lat/Long:</p>
                            <p className="card-text text-center">{searchInfo.lat}   {searchInfo.lon}</p>
                        </div>
                        <hr />

                        <div className="row text-center mb-4">
                            <div className="col-md-4">
                                <h6 className="card-title text-center">Temperature (F)</h6>
                                <h5 className="card-text text-center text-success">{searchInfo.temp}</h5>
                            </div>

                            <div className="col-md-4">
                                <h6 className="card-title text-center">Pressure</h6>
                                <h5 className="card-text text-center text-success">{searchInfo.pressure}</h5>
                            </div>

                            <div className="col-md-4">
                                <h6 className="card-title">Humidity</h6>
                                <h5 className="card-text text-success">{searchInfo.humidity}</h5>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4">
                                <h6 className="card-title text-center">Lowest Temp(F)</h6>
                                <h5 className="card-text text-center text-success ">{searchInfo.lowTemp}</h5>
                            </div>

                            <div className="col-md-4">
                                <h6 className="card-title text-center">Highest Temp(F)</h6>
                                <h5 className="card-text text-center text-success">{searchInfo.highTemp}</h5>
                            </div>

                            <div className="col-md-4">
                                <h6 className="card-title">Wind Speed</h6>
                                <h5 className="card-text text-success">{searchInfo.wind}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CityInformation;
