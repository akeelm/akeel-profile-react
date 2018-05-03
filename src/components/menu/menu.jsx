import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="menu">
                <ul>
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
        );
    }
}