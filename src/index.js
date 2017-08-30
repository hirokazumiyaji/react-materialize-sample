import React from 'react';
import { render } from 'react-dom';

import { Navbar, NavItem } from 'react-materialize';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='logo' right>
          <NavItem href='/'>Getting started</NavItem>
          <NavItem href='/'>Components</NavItem>
        </Navbar>
        <div>
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
