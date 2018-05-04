import React from 'react';
import ReactDOM from 'react-dom';
import './projects.scss';

import ContentSection from './../../components/content-section/content-section.jsx';

export default class ProjectsContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ContentSection sectionName="Projects">
                <div className="projects">
                    <h1>Projects</h1>
                    <p>
                        Some projects...
                    </p>
                </div>
            </ContentSection>
        );
    }
}
