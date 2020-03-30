// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Content extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Content mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, info) {
  //   // You can also log the error to an error reporting service
  // }

  // getDerivedStateFromProps = (nextProps, prevState) => {
  //   console.log('Content getDerivedStateFromProps', nextProps, prevState);
  // }

  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   console.log('Content getSnapshotBeforeUpdate', prevProps, prevState);
  // }

  // componentDidUpdate = () => {
  //   console.log('Content did update');
  // }

  // componentWillUnmount = () => {
  //   console.log('Content will unmount');
  // }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <section className="Content-wrapper">
        CONTENT
      </section>
    );
  }
}

// Content.PropTypes = {

// }

// Content.defaulsProps = {

// }

export default Content;