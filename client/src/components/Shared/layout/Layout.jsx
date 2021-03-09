import Footer from '../footer/Footer.jsx'

import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;