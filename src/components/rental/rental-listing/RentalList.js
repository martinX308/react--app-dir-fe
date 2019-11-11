import React, {Component}from 'react';
import {RentalCard} from './RentalCard';

class RentalList extends Component{

  renderRentals(){
    return this.props.rentals.map((rental, index)=>{
      console.log(rental);
      return(
        <RentalCard 
          key={index}
          rental={rental} 
          colNum='col-md-3 col-xs-6' />
      )
    });
  }


  render () {
    return(
      <div className='row'>
        {this.renderRentals()}
      </div> 
    )
  }
}



export default RentalList