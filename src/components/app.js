import React, { Component } from "react";
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>This Is Not a Test</h1>
        
        <h2>Contact Mr. John M Man For Information</h2>
        
        <div>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
