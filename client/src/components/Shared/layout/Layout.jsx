import Footer from '../footer/Footer.jsx'
import Nav from '../Nav/Nav.jsx'
import "./Layout.css"

import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <div className='layout'>
        <Nav user={props.user} />
      </div>
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;