import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='will'>
        Will Wardlow
         <a href='https://www.linkedin.com/in/will-wardlow/'>
          <img className='linked-in'src='https://i.imgur.com/XU5XCFs.png' alt='linkedin-page' />
        </a>
        <a href='https://github.com/willwardlow'>
          <img className= 'github' src='https://i.imgur.com/3JoFkIB.png' alt='github-page' />
        </a>
      </div>
      <div className='lauren'>
        Lauren Francis
        <a href='https://www.linkedin.com/in/lauren-petto/'>
          <img className='linked-in'src='https://i.imgur.com/XU5XCFs.png' alt='linkedin-page' />
        </a>
        <a href='https://github.com/LaurenFrancisNYC'>
          <img className= 'github' src='https://i.imgur.com/3JoFkIB.png' alt='github-page' />
        </a>
      </div>
      <div className='jake'>
        Jake Stiles
        <a href='https://www.linkedin.com/in/jacob-stiles-863b34152/'>
          <img className='linked-in'src='https://i.imgur.com/XU5XCFs.png' alt='linkedin-page' />
        </a>
        <a href='https://github.com/jstiles44'>
          <img className= 'github' src='https://i.imgur.com/3JoFkIB.png' alt='github-page' />
        </a>
      </div>
      <div className='mike'>
        Mike Pulido
        <a href='https://www.linkedin.com/in/mpulido03/'>
          <img className='linked-in' src='https://i.imgur.com/XU5XCFs.png' alt='linkedin-page' />
        </a>
        <a href='https://github.com/mtpulido'>
          <img className= 'github' src='https://i.imgur.com/3JoFkIB.png' alt='github-page' />
        </a>
      </div>
    </div>
  );
};

export default Footer;