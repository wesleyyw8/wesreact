import React from 'react';
import { countDown } from './countDown';

const Tour = React.createClass({
  componentDidMount() {
    const { timer } = this.props.tour
    const x = setInterval(() => {
      countDown(this.props.groupIndex, this.props.tourIndex, timer, this.props.buildEditTimerAction);
    }, 1000);

  },
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
    const timerFormated = {
      hours: tour.timer.hours,
      minutes: tour.timer.minutes < 10 ? `0${tour.timer.minutes}` : tour.timer.minutes,
      seconds: tour.timer.seconds  < 10 ? `0${tour.timer.seconds}` : tour.timer.seconds
    };

    return(
      <div className="grid-figure">
        <div className="count-down">
          {`${this.props.tour.timer.days > 0 ? 'days' : ''}`} {timerFormated.hours}:{timerFormated.minutes}:{timerFormated.seconds}
        </div>
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