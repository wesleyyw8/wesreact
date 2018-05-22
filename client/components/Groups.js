import React from 'react';
import SingleTour from './SingleTour';

const Groups = React.createClass({
  renderTour(tour, i) {
    return (
      <SingleTour key={i} />
    )
  },
  renderGroupItem(group, i) {
    return (
      <div className="group-item" key={i}>
        {group.tours.map(this.renderTour)}
      </div>
    )
  },
  render() {
    return(
      <div className="groups">
        {this.props.availability.groups.map(this.renderGroupItem)}
      </div>
    )
  }
});

export default Groups;

//<SingleTour key={i} />