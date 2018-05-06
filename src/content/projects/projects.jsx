import React from 'react';
import ReactDOM from 'react-dom';
import './projects.scss';

import ContentSection from './../../components/content-section/content-section.jsx';

import ITEnergyLogo from './../../assets/images/projects/ITEnergy.png';
import KingsCollegeLogo from './../../assets/images/projects/kings-college.png';
import SGSLogo from './../../assets/images/projects/sgs-logo-@2x.png';
import CiscoLiveLogo from './../../assets/images/projects/CISCO-Live-Berlin-2017.png';
import FuelPricesOnlineLogo from './../../assets/images/projects/FuelPricesOnline.png';
import RALogo from './../../assets/images/projects/RA-logo.png';
import SportEnglandLogo from './../../assets/images/projects/SportEngland.png';
import FigleavesLogo from './../../assets/images/projects/figleaves_logo.png';

export default class ProjectsContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ContentSection sectionName="Projects">
                <div className="projects">
                    <h1>What I've worked on.</h1>
                    <div className="projects__logo">
                        <img className="projects__logo__image " src={KingsCollegeLogo} alt="Kings College London" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image projects__logo__image--fit" src={ITEnergyLogo} alt="IT Energy" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image" src={SGSLogo} alt="SGS" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image" src={CiscoLiveLogo} alt="Cisco Live" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image projects__logo__image--fit" src={FuelPricesOnlineLogo} alt="Fuel Prices Online" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image projects__logo__image--fit" src={RALogo} alt="Resident Advisor" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image projects__logo__image--fit" src={SportEnglandLogo} alt="Sport England" />
                    </div>
                    <div className="projects__logo">
                        <img className="projects__logo__image projects__logo__image--fit" src={FigleavesLogo} alt="Figleaves" />
                    </div>
                </div>
            </ContentSection>
        );
    }
}
