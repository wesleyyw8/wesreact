import React from 'react';

const Group = React.createClass({
  render(){
    <div className="group-item">
      <div className="title">
        <p>{group.groupName}</p>
      </div>
      {group.tours.map(this.renderTour)}
    </div>
  }
});