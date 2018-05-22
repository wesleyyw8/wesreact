import React from 'react';
import SingleTour from './SingleTour';

const Tours = React.createClass({
  render() {
    return(
      <div className="tours">
        <SingleTour />
      </div>
    )
  }
});

export default Tours;