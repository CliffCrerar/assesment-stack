// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Animals extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Animals mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Animals getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Animals getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Animals did update');
  }

  componentWillUnmount = () => {
    console.log('Animals will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="Animals-wrapper">
        Test content
      </div>
    );
  }
}

Animals.PropTypes = {

}

Animals.defaulsProps = {

}

export default Animals;