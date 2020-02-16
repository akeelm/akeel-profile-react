import React from 'react';

import Link from './../../components/link/link.tsx';

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
                    <Link href="#" title="TESTIMONIALS" sectionName="Testimonials"></Link>
                </li>
                <li>
                    <Link href="#" title="PROJECTS" sectionName="Projects"></Link>
                </li>
                <li>
                    <Link href="#" title="CONTACT" sectionName="Contact"></Link>
                </li>
                <li>
                    <a className="link" href="https://github.com/akeelm">
                        <span className="fa fa-github-square link"></span>
                    </a>
                </li>
                <li>
                    <a className="link" href="https://www.linkedin.com/in/akeel-mughal-669b4b13">
                        <span className="fa fa-linkedin-square link"></span>
                    </a>
                </li>
            </React.Fragment>
        );
    }
}
