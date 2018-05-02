import React from 'react';
import ReactDOM from 'react-dom';
import './mobile-menu.scss';

export default class MobileMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="mobile_menu">
                    <div className="mobile__toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="mobile_menu__left">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="clear"></div>
            </div>
        );
    }
}
