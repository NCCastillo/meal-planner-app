import React, { Component } from 'react';
import Meals from './Meals';

class Menu extends Component {
  render() {
    return (
      <div className="row">
        <div className="seven columns">
          <p>Menu Stuff</p>
          <p>Menu component here</p>
        </div>
        <div className="five columns">
          <Meals />
        </div>
      </div>
    )
  }
}

export default Menu;
