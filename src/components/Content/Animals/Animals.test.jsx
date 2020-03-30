import React from 'react';
import ReactDOM from 'react-dom';
import Animals from './Animals';

it('Animals renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Animals />, div);
  ReactDOM.unmountComponentAtNode(div);
});
