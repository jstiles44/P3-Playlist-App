import Footer from '../footer/Footer.jsx'
import Nav from '../Nav/Nav.jsx'

import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <div className='layout'>
        <Nav user={user.props} />
      </div>
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;