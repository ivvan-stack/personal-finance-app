import React, { Component } from 'react';
import Header from '../header';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <main role="main" className="home">
          <div className="grid-noGutter">
            <div className="col-12">
              <ul>
                <li>{ this.props.data }</li>
              </ul>
            </div>
            <div className="col-6" style={{height: '5rem', backgroundColor: 'green'}}></div>
            <div className="col-6" style={{height: '5rem', backgroundColor: 'pink'}}></div>
            <div className="col-4" style={{height: '5rem', backgroundColor: 'orange'}}></div>
            <div className="col-8" style={{height: '5rem', backgroundColor: 'gray'}}></div>
            <div className="col-3" style={{height: '5rem', backgroundColor: 'brown'}}></div>
            <div className="col-9" style={{height: '5rem', backgroundColor: 'yellow'}}></div>
            <div className="col-1" style={{height: '5rem', backgroundColor: 'lightgray'}}></div>
            <div className="col-11" style={{height: '5rem', backgroundColor: 'red'}}></div>
          </div>
        </main>
      </div>
    );
  }

}

export default Home;
