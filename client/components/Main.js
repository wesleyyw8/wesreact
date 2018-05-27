import React from 'react';

const Main = React.createClass({
  render() {
    return(
      <div>
        <div className="nav-bar">
          Wesley Rebelo - wesleyyw8@gmail.com
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;