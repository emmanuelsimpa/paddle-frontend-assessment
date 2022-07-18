import React, {useState } from 'react'
import { NavLink } from 'react-router-dom';
import './styles.scss'

const NavBlog = (item) => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const ref = 'javascript:void(0)';

  
    return (
        <div>
         <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
          <nav className="navbar container mx-auto" onClick={e => e.stopPropagation()}>
            <div className="nav-container">
              <NavLink  to="/" className="nav-logo" activeclassname="bg-[#fff]">
               Bosey
                <i className="fa fa-code"></i>
              </NavLink>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    
                    to="/about"
                    activeclassname="active"
                    className="nav-links text-black"
                    onClick={click ? handleClick : null}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    
                    to="/blog"
                    activeclassname='active'
                    className="nav-links text-black"
                    onClick={click ? handleClick : null}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/github"
                    activeclassname="active"
                    className="nav-links text-black"
                    onClick={click ? handleClick : null}
                  >
                    Github
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    
                    href={ref}
                    activeclassname="active"
                    className="nav-links bg-[#fff] font-bold rounded-full w-full text-black"
                   onClick={click ? handleClick : null}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
              </div>
            </div>
          </nav>
        </ div>
      );
}
export default NavBlog
