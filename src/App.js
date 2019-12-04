import React, {Component} from 'react';
import Header from './components/Header';
import Clicker from './components/Clicker';

const header = {
  marginTop: 0
}

class App extends Component {
  constructor() {
    super();

    this.state = {
        title: 'React Clicker'
    };
  }
  
  render(){
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Clicker />
        </div>
      </div>
    );
  }
}

export default App;
