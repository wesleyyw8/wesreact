import React from 'react';
//import Tour from './Tour';
import TourConnectors from './Tour-connectors';

const Groups = React.createClass({
  renderTour(tour, i) {
    return (
      <TourConnectors key={i} tour={tour}/>
    )
  },
  renderGroupItem(group, i) {
    return (
      <div className="group-item" key={i}>
        <div className="title">
          <p>{group.groupName}</p>
        </div>
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