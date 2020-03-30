// @flow
import React from 'react';
// import PropTypes from 'prop-types';
import './Nav.scss'

const nav = [
  { caption: 'Categories' },
  { caption: 'Animals' },
  { caption: 'Zookeepers' }
]

const Nav = (props: any) => {

  const links = nav.map(({ caption }, idx) => (
    <li key={idx}>
      <a href="#">{caption}</a>
    </li>
  ));

  return (
    <div className="nav-wrapper">
      <h3>Zoo</h3>
      <ul className="nav-links">
        {links}
      </ul>
    </div>
  )
};

export default Nav;