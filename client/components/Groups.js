import React from 'react';
import TourConnectors from './Tour-connectors';

const Groups = React.createClass({
  renderTour(tour, i) {
    return (
      <TourConnectors key={i} tour={tour} tourIndex={i} {...this.props}/>
    )
  },
  renderGroupItem(group, i) {
    return (
      <div className="group-item" key={i} groupIndex={i}>
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