import React from "react";
import "./projects.scss";

import ContentSection from "./../../components/content-section/content-section";

const ITEnergyLogo = require("./../../assets/images/projects/ITEnergy.png");
const KingsCollegeLogo = require("./../../assets/images/projects/kings-college.png");
const SGSLogo = require("./../../assets/images/projects/sgs-logo-@2x.png");
const CiscoLiveLogo = require("./../../assets/images/projects/CISCO-Live-Berlin-2017.png");
const FuelPricesOnlineLogo = require("./../../assets/images/projects/FuelPricesOnline.png");
const RALogo = require("./../../assets/images/projects/RA-logo.png");
const SportEnglandLogo = require("./../../assets/images/projects/SportEngland.png");
const FigleavesLogo = require("./../../assets/images/projects/figleaves_logo.png");
const CiscoPhoto = require("./../../assets/images/projects/cisco-photo.jpg");
const TraceOneLogo = require("./../../assets/images/projects/TraceOne.png");
const PlumGuideLogo = require("./../../assets/images/projects/plum-guide.jpg");

export const ProjectsContent = () => {
  return (
    <ContentSection sectionName="Projects">
      <div className="projects">
        <h1>What I&apos;ve worked on</h1>

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image "
                src={PlumGuideLogo}
                alt="The Plum Guide"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              I was contracted by The Plum Guide to work on various projects as
              a developer with full stack experience across a React front-end, 
              .NET C# back-end and SQL Server Databases.
            </p>
            <p>
              Work was varied - reactive bug fixing, new features, performance 
              improvements and A / B testing.
            </p>
            <p>
              The last few weeks I lead the front-end for a listing building project.
              The UI required complex drag and drop functionality, reordering sections
              and photos as they are dragged around, amongst other interesting features.
            </p>
            <p>
              A partially finished demo of the listing building project can be seen &#32;
              <a href="https://www.loom.com/share/3018e7e3f1194563a612d234d19e8c37" target="_blank">here</a> &#32; 
              (only partially completed due to back-end not being completed before handing over the project to
              a permanent staff replacement)
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image "
                src={TraceOneLogo}
                alt="Trace One"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              I was contracted by Trace One to build the front-end of an auditing application
              for use by the British Retail Consortium.
            </p>
            <p>
              The front-end was developed using React (Hocs, hooks etc), ES6, Redux,
              Redux-Saga, Redux-Form, React-Router, Webpack, Jest / enzyme tests.
            </p>
            <p>
              The application made use of plenty of dynamic forms, complex custom controls,
              complicated business logic and connected to several micro-services.
            </p>
            <p>
              Part way through the project, the product owner left the company.
              Having good knowledge I helped handover and assist with product ownership,
              making decisions on functionality implementation based on business requirements
              and time constraints, but also communicating with the business about delivery
              and cross team communication where needed).
            </p>
          </div>
        </section>

        <hr />


        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image "
                src={KingsCollegeLogo}
                alt="Kings College London"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              Contracted by King’s College London to work on a medical research
              project for the automated detection of the presence of bacteria in
              a sample. A sample is placed into the device, along with a
              solution. If bacteria is present, the solution gradually increases
              in fluorescence. So they would take an image every 10 seconds and
              measure the intensity over a time of 10 minutes.
            </p>
            <p>
              The project required interfacing with a microscopic camera,
              Arduino controller and temperature sensor. The readings from the
              image kept fluctuating drastically, giving false positives.
            </p>
            <p>
              My involvement was to troubleshoot and fix the problems with the
              code and implement new features, which involved using mathematical
              statistics.
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image projects__image--fit"
                src={ITEnergyLogo}
                alt="IT Energy"
              />
            </div>
            <div className="projects__logo">
              <img className="projects__image" src={SGSLogo} alt="SGS" />
            </div>
          </div>
          <div className="projects__description">
            <p>
              I was hired to work on a new project for SGS &#8211; a global
              inspection, verification, testing and certification company
              headquartered in Geneva. The requirement was to build an interface
              / various modules for shipping inspectors to enter inspection
              data.
            </p>
            <p>
              The front end was built in React (ES6, Babel, Webpack 2, SASS),
              whilst the back-end was using .NET and SQL Server.
            </p>
            <p>
              Shipping inspection module &#8211; a complex form with
              dynamic/conditional/hidden inputs based on different product types
              (i.e. oil, gasses, chemicals). Some inputs were also restricted to
              different ranges based on sub-products (over two thousand
              available), measurement types and temperatures. Some fields were
              disabled for user input and these updated with dynamic
              calculations as the user enters values into other inputs. Also
              responsible for designing/creating the database tables and the
              API’s.
            </p>
            <p>
              Timelog module &#8211; a timelog entry module, with a combination
              of fixed list of events and dynamic events. Two different lists of
              events, depending on whether it was a loading or discharge
              inspection. They dynamic events were based on what
              products/parcels were on board the ship. Rules to stop users
              entering out of time events to ensure the data entered was clean
              for later KPI reporting.
            </p>
            <p>
              Other modules included a module to match live ship location
              records from another system to the inspection and a wizard to tie
              all the modules together and provide a workflow for inspectors.
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image"
                src={CiscoLiveLogo}
                alt="Cisco Live"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              I was hired to assist at Cisco Live 2017 in Berlin, they needed
              someone who can write code and is articulate, approachable and
              personable to speak to event delegates. The brief was to assist
              with a robotics coding challenge using Sphero robots to solve a
              maze. The advanced challenge involved coding an autonomous
              solution, whereby you don&#8217;t know the layout of the maze,
              using a propriety language called Oval.
            </p>
            <p>
              Oval is a rudimentary subset of the C language, an imperative
              language with only very basic types supported. In this case ints
              and floats, adding to the challenge of creating a good solution.
            </p>
            <p>
              <img
                className="projects__photo"
                src={CiscoPhoto}
                alt="Sphero Maze"
              />
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image projects__image--fit"
                src={ITEnergyLogo}
                alt="IT Energy"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              Working on a wide variety of internal and external
              products/projects for the shipping and energy industry. Many new,
              existing and legacy products, which often involved being given a
              project where the last person to have worked on it had left many
              years ago. This meant looking through many lines of code in order
              to understand the product and what work needed to be done going
              forward.
            </p>
            <p>
              I was also able to help improve performance on the main critical
              product for the company that was used by thousands of ships
              worldwide. Each ship sends back data that needs to be aggregated
              into different data sets and involve complex calculations. For
              example one of the performance improvements gained was achieved by
              converting calculations from SQL functions into Native CLR&#8217;s
              and reducing iterations in the algorithms, where possible.
            </p>
            <p>
              I also often worked with other technologies for the first time
              such as Android and MS SharePoint.
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo projects__logo--darker">
              <img
                className="projects__image projects__image--fit"
                src={FuelPricesOnlineLogo}
                alt="Fuel Prices Online"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              FuelPricesOnline is a customer for IT Energy and I was the main
              developer responsible for this client. One of the projects I
              developed was a live market board, where customers of
              FuelPricesOnline could select tickers of various products across
              different markets and track the prices.
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image projects__image--fit"
                src={RALogo}
                alt="Resident Advisor"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              Resident Advisor is an online music magazine, world wide events
              listing platform and ticket seller.
            </p>
            <p>
              When I first started working for Resident Advisor in 2011, the
              site was incredibly slow and the main page took over 13 seconds to
              load. I was able to analyze and identify the biggest problem areas
              for performance, and by tuning the database and code in these
              areas, I helped to get the main page load down to 3 seconds. The
              site now serves 3 million users per month.
            </p>
            <p>
              I also built a support system for the ticketing team. This enabled
              them to deal with a large number of support queries efficiently
              and effectively, tracking issues from initial report to close.
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image projects__image--fit"
                src={SportEnglandLogo}
                alt="Sport England"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              Sport England is a government body that invests public and lottery
              funding into sporting organisations and projects. My main
              responsibilities were to look after the grants management system,
              create various solutions for different departments and create SQL
              reports to report back to government/parliament.
            </p>
          </div>
        </section>

        <hr />

        <section className="projects__container">
          <div className="projects__logos">
            <div className="projects__logo">
              <img
                className="projects__image projects__image--fit"
                src={FigleavesLogo}
                alt="Figleaves"
              />
            </div>
          </div>
          <div className="projects__description">
            <p>
              Figleaves is a popular online retailer, shipping worldwide. I was
              working as the sole database administrator, managing 35 separate
              SQL Servers in a high transaction environment. I was also
              responsible for database development and responsible for reviewing
              database code changes from other developers.
            </p>
          </div>
        </section>
      </div>
    </ContentSection>
  );
};

export default ProjectsContent;