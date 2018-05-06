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
                    <h1>Contact me.</h1>
                    <p>
                        <a href="mailto:contact@akeel.co.uk">contact@akeel.co.uk</a>
                    </p>
                    <section>
                        AKEEL MUGHAL LTD © 2016 <br />
                        Company No: 10459355 registered in England and Wales <br /> 
                        Company address: Kemp House, 160 City Road, London, EC1V 2NX, UNITED KINGDOM <br />
                        VAT No: 264259195 <br />
                    </section>
                </div>
            </ContentSection>
        );
    }
}


