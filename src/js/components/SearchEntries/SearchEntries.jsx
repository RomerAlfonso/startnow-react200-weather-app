import React from 'react';


import {
    updateSearchDescription,
        getWeather    
} from './searchActions';


export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);
        
this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
this.handleCityWeather = this.handleCityWeather.bind(this)    
this.handleCityNav = this.handleCityNav.bind(this)
}

    handleDescriptionInput(event){
        const {dispatch} =this.props;
        const {value} = event.target;
        dispatch(updateSearchDescription(value));
    }

    handleCityWeather() {
        const{description, amount, dispatch} = this.props;
        dispatch(getWeather(description));
        
    }

    handleCityNav(e){
        // console.log(e.target.dataset.name)
        const {dispatch} = this.props;
        const {name}=e.target.dataset;
        dispatch(getWeather(name));
        
    }

    render() {


              
        return (
            <div className="container">

                <div className="row">
                    <div type='button' data-name="San Diego" className="btn btn-primary col " onClick={this.handleCityNav} >
                        San Diegos
                    </div>
                    <div type='button' data-name="New York" className="btn btn-primary col" onClick={this.handleCityNav}>
                        New York
                    </div>
                    <div type='button' data-name="London" className="btn btn-primary col" onClick={this.handleCityNav}>
                        London
                    </div>
                    <div type='button' data-name="Tokyo" className="btn btn-primary col" onClick={this.handleCityNav}>
                        Tokyo
                    </div>
                </div>

                <div className="container pt-3">
                    <div className='row '>
                        <div className="col-11">
                            <input type="text" className="form-control " onChange={this.handleDescriptionInput} />
                        </div>
                        <button className="col-1 btn btn-outline-primary" type="button" onClick={this.handleCityWeather}>Go!</button>
                    </div>
                </div>

            </div>

        );
    }
}
