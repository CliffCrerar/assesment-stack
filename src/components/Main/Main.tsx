// @flow
import React, { Component } from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
import SideNav from './SideNav/SideNav';
import Content from './Content/Content';

class Main extends Component {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="main-wrapper">
        <nav>
          <Nav/>
        </nav>

        <main className="sections">
          {/* <SideNav/> */}
          <Content/>
        </main>
        
        
      </div>
    )
  }
}

export default Main 