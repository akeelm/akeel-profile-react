import React from 'react';
import ReactDOM from 'react-dom';
import './testimonials.scss';

import ContentSection from './../../components/content-section/content-section.jsx';

export default class TestimonialsContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ContentSection sectionName="Testimonials">
                <div className="testimonials">
                    <h1>Testimonials</h1>
                    <p>
                        Some testimonials...
                    </p>
                </div>
            </ContentSection>
        );
    }
}

