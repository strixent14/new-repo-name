import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // for page highlighting
import './header.css'; // Keep consistent header styling

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const location = useLocation(); // to track the current page

    return (
        <header className='header'>
            <nav className='nav container'>
                <Link to="/" className="nav_logo">Virzentuous</Link>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <Link to="/" className={`nav_link ${location.pathname === '/' ? 'active-link' : ''}`}>
                                <i className='uil uil-estate nav_icon'></i> Home
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/pricing" className={`nav_link ${location.pathname === '/pricing' ? 'active-link' : ''}`}>
                                <i className='uil uil-user nav_icon'></i> Pricing
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/contact" className={`nav_link ${location.pathname === '/contact' ? 'active-link' : ''}`}>
                                <i className='uil uil-comment-notes nav_icon'></i> Contact
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/review" className={`nav_link ${location.pathname === '/review' ? 'active-link' : ''}`}>
                                <i className='uil uil-comment-notes nav_icon'></i> Review
                            </Link>
                        </li>
                    </ul>

                    <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-align-alt"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
