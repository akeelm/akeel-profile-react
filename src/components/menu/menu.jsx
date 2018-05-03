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
                        <Link href="#" title="ABOUT" sectionName="About"></Link>
                    </li>
                    <li>
                        <Link href="#" title="PROJECTS" sectionName="Projects"></Link>
                    </li>
                    <li>
                        <Link href="#" title="TESTIMONIALS" sectionName="Testimonials"></Link>
                    </li>
                    <li>
                        <Link href="#" title="CONTACT" sectionName="Contact"></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}