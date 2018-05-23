import React from 'react';

const Tour = React.createClass({
  onBookingClick(e) {
    e.preventDefault();
    this.props.buildEditSeatsLeftAction(this.props.groupIndex, this.props.tourIndex, (this.props.tour.seatsLeft -1));
  },
  render() {
    const tour = this.props.tour;
    return(
      <div className="grid-figure">
        <div className="grid-photo-wrap">
          <img 
            src="https://cdn.tourradar.com/s3/tour/645x430/24087_1ac9705f.jpg" 
            alt="pic!!" 
            className="grid-photo" />
        </div>
        <div className="figure-caption">
          <p>{tour.tourName}</p>
          <p>Seats left: {tour.seatsLeft >= 10 ? '10+' : tour.seatsLeft}</p>
          <button onClick={this.onBookingClick}>
            Book now!
          </button>
        </div>
      </div>
    )
  }
});

export default Tour;