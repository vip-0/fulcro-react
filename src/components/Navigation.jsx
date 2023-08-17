import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const handleMobileIconClick = () => {
        // Handle mobile icon click logic here
    };
    // const searchevent = (event) => {
    //     // Define your search event functionality here
    // };
    
    return (
        <header className="main-menu">
        <div className="max_width">
            <div className="clear">
            <div className="fulcro-logo">
                <Link to="/">
                <img
                    src="/images/logo.png"
                    alt="Fulcro Logo"
                    title="Fulcro Logo"
                    width="156"
                    height="56"
                />
                </Link>
            </div>
            <div className="search desktop-hide">
                <img
                src="/images/magnifying-glass.svg"
                className="open-search"
                alt="magnifying glass"
                title="magnifying glass"
                width="20"
                height="20"
                />
            </div>
            <div className="icon-menu menu-icon" onClick={handleMobileIconClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <div className="menu">
                <ul>
                <li>
                    <Link to="/about-fulcro/">About fulcro</Link>
                </li>
                <li>
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                    {/* Add more sub-menu items */}
                    </ul>
                </li>
                <li>
                    <Link to="#">What we do</Link>
                    <ul className="sub-menu equal-menu">
                    {/* Add more sub-menu items */}
                    </ul>
                </li>
                <li>
                    <Link to="/careers/">Careers</Link>
                </li>
                <li>
                    <Link to="#">Contact Us</Link>
                    <ul className="sub-menu">
                    {/* Add more sub-menu items */}
                    </ul>
                </li>
                <li className="mobile-hide search">
                    <Link to="#" className="open-search">
                    <img
                        src="/images/magnifying-glass.svg"
                        alt="magnifying glass"
                        title="magnifying glass"
                        width="20"
                        height="20"
                    />
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        {/* <div className="menu-height"></div>
        <section className="search-overlay">
          <div className="search-close">
            <img src="/images/close.svg" className="close-search" title="Close" alt="Close" width="20" height="20" />
          </div>
          <div className="serch-box">
            <input type="text" name="" id="search-calc" placeholder="Enter your keywords..." />
            <div className="magnifying-glass">
              <img
                src="/images/magnifying-glass.svg"
                title="magnifying glass"
                alt="magnifying glass"
                width="20"
                height="20"
                onClick={searchevent}
              />
            </div>
          </div>
        </section> */}
        </header>
        // <div>
        //     <h1>hello world!!</h1>
        // </div>
    );
}
export default Navigation;

