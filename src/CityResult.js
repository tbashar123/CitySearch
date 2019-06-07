 import React from 'react';

class CityResult extends React.Component {

  render(){
      //console.log(this.props);
    return(
      <div>
      <label>{this.props.zipcode}</label> <br />
      </div>
    );
  }
}

export default CityResult;
