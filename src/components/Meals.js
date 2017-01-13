import React, { Component } from 'react';
import './../css/Meals.css';

class Meals extends Component {
  
  handleChange(event) {
    console.log("inside handle change event");
    console.log(event.target.value);
    // dispatch(addMealToMenu(event.target.value, event.target.text))
    // displatch(addMealtoMenu(menuId, meal))
    // I need the menu id passed in from somewhere
  }

  // create a new component called meal item and move the
  // select and item name into it. 
  render() {
    return (
      <div className="meals">
        <h5>Meals</h5>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
          Basmati Rice
          </div>
          <div className="six columns">
            <select onChange={this.handleChange}>
              <option value="0">Choose...</option>
              <option value="1">Sunday</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="6">Friday</option>
              <option value="7">Saturday</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Meals;
