import React from 'react';
import ReactDOM from 'react-dom';

import Link from './../../components/link/link.jsx';

export default class MenuItems extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}
