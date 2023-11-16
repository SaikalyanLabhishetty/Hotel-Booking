// Appheader.js
import React, { useState } from 'react';
import './Appheader.css';
import { Link } from 'react-router-dom';
import { Menu, ArrowLeftIcon } from 'lucide-react';

const Appheader = () => {
  const name = "Booker.io";
  const book = "Book";
  const signup = "Signup";
  const headerStyle = { backgroundColor: "transparent", textDecoration: "None", color: "white" };

  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(true);
  }

  function closeSidebar() {
    setSidebar(false);
  }

  return (
    <>
      <div className='header'>
        <div className='menu-icon' onClick={showSidebar}>
          <Menu size={40} fill='white'/>
        </div>
        <div className='Logo'>
          <p>
            <Link to="/" style={headerStyle}>{name}</Link>
          </p>
        </div>
        <ul className='list'>
          <li>
            <Link to="/AppBook" style={headerStyle}>{book}</Link>
          </li>
          <li>
            <Link to="/AppSignup" style={headerStyle}>{signup}</Link>
          </li>
        </ul>
      </div>
      {sidebar &&
        <div className='sidebar'>
          <div className='back' onClick={closeSidebar}>
            <ArrowLeftIcon size={40} />
          </div>
          <div className='Logo'>
            <p>
              <Link to="/" style={headerStyle}>{name}</Link>
            </p>
          </div>
          <ul className='list-2'>
            <li>
              <Link to="/AppBook" style={headerStyle}>{book}</Link>
            </li>
            <li>
              <Link to="/AppSignup" style={headerStyle}>{signup}</Link>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default Appheader;
