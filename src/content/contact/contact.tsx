import React from 'react';
import './contact.scss';

import ContentSection from './../../components/content-section/content-section';

export const ContactContent = () => {
  return (
    <ContentSection sectionName="Contact">
      <div className="contact">
        <h1>Contact me</h1>
        <div className="contact__container">
          <section className="contact__company_info">
            <b>AKEEL MUGHAL LTD © {new Date().getFullYear()}</b> <br />
            <p className="contact_company_info--smaller">
              Company No: 10459355 registered in England and Wales <br />
              Company address: Kemp House, 160 City Road, London, EC1V 2NX,
              UNITED KINGDOM <br />
              VAT No: 264259195 <br />
            </p>
          </section>
          <section className="contact__email">
            <a href="mailto:contact@akeel.co.uk">contact@akeel.co.uk</a>
          </section>
          <section className="contact__links">
            <a href="https://github.com/akeelm">
              <span className="fa fa-github-square link"></span>
            </a>
            <a href="https://www.linkedin.com/in/akeel-mughal-669b4b13">
              <span className="fa fa-linkedin-square link"></span>
            </a>
          </section>
        </div>
      </div>
    </ContentSection>
  );
};

export default ContactContent;