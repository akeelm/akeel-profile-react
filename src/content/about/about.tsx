import React from 'react';
import * as moment from 'moment';
import './about.scss';

import ContentSection from './../../components/content-section/content-section';

const ProfileImage = require('./../../assets/images/profile.jpg');

const dateStarted = new Date("2008/08/01");
const yearsDifference = moment(new Date()).diff(dateStarted, 'years');

export const AboutContent = () => {
  return (
    <ContentSection sectionName="About">
      <div className="about">
        <img
          className="about__profile_image"
          src={ProfileImage}
          alt="Profile image"
        />
        <p>
          Hi there! I’m a React developer with more than {yearsDifference} years of
          experience in development. My experience has been gained working in a
          variety of industries, working for companies, big and small, in
          London.
        </p>

        <p>
          The technologies I have experience with in the React / JavaScript ecosystem
          are HoC's, React Hooks, ES6+, Typescript, Redux, Jest, Enzyme, React Testing Library,
          Webpack, Grunt, CSS/LESS/SASS, Babel, React Router, React DnD and more.
        </p>

        <p>
          I also have experience with C#, ASP.NET MVC, Entity Framework,
          SQL Server, Bootstrap, Knockout, jQuery, node.js, TDD (Test Driven Development),
          performance tuning, SEO, WordPress, PHP, Android, SSIS, SSRS,
          SharePoint, VB.NET, ASP Classic, WPF and more.
        </p>

        <p>
          I take pride in writing clean, reusable and efficient code, but most
          importantly I enjoy challenges and delivering creative solutions.
        </p>

        <p>
          I also like to work quickly and effectively, and I'm proud of
          my unique workflow - I use i3wm to manage workspaces and windows and
          I make extensive use of Vi/Vim key bindings on anything I can.
        </p>
      </div>
    </ContentSection>
  );
};

export default AboutContent;