import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import VerticalNav from './VerticalNav';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="row">
            <div className="one column">
              <VerticalNav />  
            </div>
            <div className="eleven columns">
              { this.props.children }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
