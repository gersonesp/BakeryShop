import React, { Component } from "react";

class Homepage extends Component {
  //button is how to update html background image 
  //use and change later
  render() {
    return (
      <div id="homepage">
        <h1>Hello World</h1>
        <button type='submit' onClick={() => {
          document.documentElement.style.backgroundImage = "url(https://images.unsplash.com/photo-1555541948-826ee9ab3cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1547&q=80)"
        }}> CLICK ME</button>
      </div>);
  }
}

export default Homepage;
