import React from 'react';
import Group from './Group';

const Groups = React.createClass({
  renderGroupItem(group, i) {
    return (
      <Group key={i} groupIndex={i} group={group} />
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