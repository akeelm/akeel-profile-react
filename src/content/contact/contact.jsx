import React from 'react';
import ReactDOM from 'react-dom';
import './contact.scss';

import ContentSection from './../../components/content-section/content-section.jsx';

export default class ContactContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ContentSection sectionName="Contact">
                <div className="contact">
                    <h1>Contact me</h1>
                    <p>
                        Some contact details and company information...
                    </p>
                </div>
            </ContentSection>
        );
    }
}


