// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SideNav extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('SideNav mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, info) {
  //   // You can also log the error to an error reporting service
  // }

  // getDerivedStateFromProps = (nextProps, prevState) => {
  //   console.log('SideNav getDerivedStateFromProps', nextProps, prevState);
  // }

  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   console.log('SideNav getSnapshotBeforeUpdate', prevProps, prevState);
  // }

  // componentDidUpdate = () => {
  //   console.log('SideNav did update');
  // }

  // componentWillUnmount = () => {
  //   console.log('SideNav will unmount');
  // }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <section className="SideNav-wrapper">
        SIDENAV
      </section>
    );
  }
}

// SideNav.PropTypes = {

// }

// SideNav.defaultProps = {

// }

export default SideNav;