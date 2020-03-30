// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Categories extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Categories mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Categories getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Categories getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Categories did update');
  }

  componentWillUnmount = () => {
    console.log('Categories will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="Categories-wrapper">
        Test content
      </div>
    );
  }
}

Categories.PropTypes = {

}

Categories.defaulsProps = {

}

export default Categories;