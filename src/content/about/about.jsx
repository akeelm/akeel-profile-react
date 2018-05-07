import React from 'react';
import ReactDOM from 'react-dom';
import './about.scss';

import ContentSection from './../../components/content-section/content-section.jsx';

import ProfileImage from './../../assets/images/profile.jpg';

export default class AboutContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ContentSection sectionName="About">
                <div className="about">
                    <img className="about__profile_image" src={ProfileImage} alt="Profile image" />
                    <h1>About me.</h1>
                    <p>
                       Hi there! I’m a full stack developer with more than ten years of experience in 
                       development. My experience has been gained working in 
                       a variety of industries, working for companies, big and small, in London.
                    </p>

                    <p>
                        My specialties include C#, ASP.NET MVC, Entity Framework, SQL Server, CSS/LESS/SASS, 
                        Front-end frameworks such as Bootstrap, Knockout and React/Redux, Javascript, jQuery, 
                        node.js (including tooling such as grunt, webpack, babel etc.), TDD (Test Driven Development) 
                        and performance tuning databases and code. I also have experience with SEO, WordPress, PHP, Android, 
                        SSIS, SSRS, SharePoint, VB.NET, ASP Classic, WPF and other technologies.
                    </p>

                    <p>
                        I take pride in writing clean, reusable and efficient code, but most importantly I enjoy challenges 
                        and delivering creative solutions.
                    </p>
                </div>
            </ContentSection>
        );
    }
}