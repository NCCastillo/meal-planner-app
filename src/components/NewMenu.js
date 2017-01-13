import React, { Component} from 'react';

class NewMenu extends Component {
  render() {
    return (
      <div className="add-new-menu">
        <h5>Add a New Menu</h5>
        <form>
          <label>Menu Name</label>
          <input className="u-full-width" type="text" ref="name" />
          <label>Week</label>
          <input className="u-full-width" type="text" ref="week" />
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewMenu;
