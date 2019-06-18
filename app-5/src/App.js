import React, { Component } from "react";
import "./App.css";
import RenderPhoto from './Components/RenderPhoto'

class App extends Component {
  render() {
    return (
      <div className="App">
      <RenderPhoto myRenderPhoto={"https://s3.amazonaws.com/media-p.slid.es/uploads/907890/images/5125689/bryan.jpeg"}/>
      </div>
    );
  }
}

export default App;
