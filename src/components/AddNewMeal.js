import React, { Component } from 'react';
import './../css/AddNewMeal.css';

class AddNewMeal extends Component {
  render() {
    return (
      <div className="add-new-meal">
        <h5>Add a New Meal</h5>
        <form>
          <label>Meal Name</label>
          <input className="u-full-width" type="text" />
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddNewMeal;
