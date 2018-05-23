import React from 'react';
import TourConnectors from './Tour-connectors';

const Group = React.createClass({
  renderTour(tour, i) {
    return (
      <TourConnectors key={i} tour={tour} tourIndex={i} {...this.props}/>
    )
  },
  render(){
    const group = this.props.group;
    return (
      <div className="group-item">
        <div className="title">
          <p>{group.groupName}</p>
        </div>
        {group.tours.map(this.renderTour)}
      </div>
    )
  }
});

export default Group;