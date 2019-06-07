import React from 'react';
import './App.css';
import axios from 'axios';
import CityResult from './CityResult'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cities: []
    }
  }

  searchCity = (event) => {
    event.preventDefault();
   let userInput = event.target[0].value;
    console.log(userInput);

   axios.get('http://ctp-zip-api.herokuapp.com/city/' +userInput)
    .then( (resolve) => {
      this.setState( {cities: resolve.data} );
      console.log(resolve.data);
        console.log('HEY');
    })
    .catch( (err)=> console.log(err));

  }

  render(){
    let elems = [];
    // let index = 0;
    // for(let city of this.state.cities){
    //   elems.push(<CityResult key={index++} {...city}/>);
    // }
    console.log(this.state.cities)
    elems = this.state.cities.map((elem, i) => <CityResult key={i} zipcode={elem} />)
      console.log('HEY')
    return (
      <div>
      <form onSubmit={this.searchCity}>
      <h1>City Search</h1>
      <input type="text" />

      </form>
      {elems}
      </div>
    );
  }

  }


export default App;
