import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-button menu-button">
          <Link to="/menu">
            View Our Menu
          </Link>
        </div>
        <div className="homepage-button aboutus-button">
          <Link to="/aboutus">
            About Us
          </Link>
        </div>
    </div>);
  }
}

export default Homepage;
