import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="menu">
                    <ul className="menu__right">
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