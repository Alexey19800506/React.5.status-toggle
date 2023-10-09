import React from 'react';


class Toggler extends React.Component {
 
constructor(props) {
  super(props);

  this.state = {
    status: 'Off',
  }

}

status() {
  if(this.state.status === 'On') {
    this.setState({
      status: 'Off',
    }); 
  }
  else if(this.state.status === 'Off') {
    this.setState({
      status: 'On',
    }); 
  }
 
}

    render() {
        return (
          <div className="toggler" onClick={() => this.status()}>{this.state.status}</div>
        );
    }
}
   
export default Toggler;

