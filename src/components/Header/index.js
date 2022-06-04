import React from 'react';

import Navbar from './NavBar';
import Logo from './Logo';

import "./navbar.scss";

const Header = ({user, currencyConvert}) => (
   <nav className="nav-wrapper teal">
     <div className="container">
       <Logo />
       <Navbar user={user} currencyConvert={currencyConvert} />
     </div>
   </nav>
);

export default Header;