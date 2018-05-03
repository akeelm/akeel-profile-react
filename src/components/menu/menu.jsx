import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

import Link from './../link/link.jsx';

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="menu">
                <ul>
                    <li>
                        <Link href="#" title="ABOUT"></Link>
                    </li>
                    <li>
                        <Link href="#" title="PROJECTS"></Link>
                    </li>
                    <li>
                        <Link href="#" title="TESTIMONIALS"></Link>
                    </li>
                    <li>
                        <Link href="#" title="CONTACT"></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}