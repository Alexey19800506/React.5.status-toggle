import React from 'react';


class Toggler extends React.Component {
 
constructor(props) {
  super(props);

  this.state = {
    status: 'Off',
  }

  this.status = this.status.bind(this);
}

status() {
 this.setState({
  status: 'On',
}); 
}

    render() {
        return (
          <div className="toggler" onClick={this.status}>{this.state.status}</div>
        );
    }
}
   
export default Toggler;

