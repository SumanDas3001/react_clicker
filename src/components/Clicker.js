import React, { Component } from 'react';
import { directive } from '@babel/types';

class Clicker extends Component {

  constructor(props) {
    super();

    this.state = {
      count: props.count
    };
  }

  render(){
    return(
      <div className="container">
        <div className="clicker border border-secondary rounded">
          <div className="mx-auto display-1">{this.state.count}</div>
        </div>
        <div className="clicker-button-panel d-flex flex-row">

        </div>
      </div>
    );
  }
}

export default Clicker;