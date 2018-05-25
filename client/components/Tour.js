import React from 'react';

const Tour = React.createClass({
  onBookingClick(e) {
    e.preventDefault();
    if (this.props.tour.seatsLeft === 1) {
      this.props.buildEditIsAvailableAction(this.props.groupIndex, this.props.tourIndex, false);
    }
    if (this.props.tour.seatsLeft > 0) {
      this.props.buildEditSeatsLeftAction(this.props.groupIndex, this.props.tourIndex, (this.props.tour.seatsLeft -1));
    }
  },
  render() {
    const tour = this.props.tour;
    const onBookingButton = <button onClick={this.onBookingClick} className={'button ' + (!tour.isAvailable ? 'disabled' : 'hidden')} >Book now!</button>
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
            {onBookingButton}
        </div>
      </div>
    )
  }
});

export default Tour;