import React from 'react';

const SingleTour = React.createClass({
  render() {
    return(
      <div className="grid-figure">
        <div className="grid-photo-wrap">
          <img 
            src="https://cdn.tourradar.com/s3/tour/645x430/24087_1ac9705f.jpg" 
            alt="pic!!" 
            className="grid-photo" />
        </div>
        <figcaption>
          <p>asdasdasdasd</p>
          <button >
            Book now!
          </button>
        </figcaption>
      </div>
    )
  }
});

export default SingleTour;