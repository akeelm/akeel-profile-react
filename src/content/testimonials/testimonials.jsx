import React from 'react';
import './testimonials.scss';

import ContentSection from './../../components/content-section/content-section.tsx';

export default class TestimonialsContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ContentSection sectionName="Testimonials">
                <div className="testimonials">
                    <h1>Testimonials.</h1>

                    <section>
                        <i>
                            <p>
                                &quot;Akeel was hired by us to develop and troubleshoot a software running a prototype medical device, requiring understanding of the clinical problem, the electronics and implementation. 
                            </p>
                            <p>
                                We were highly impressed by Akeel&apos;s engagement with this project, which spanned from the conceptual phase to the troubleshooting at the commissioning. Akeel did a brilliant job, engaging with stakeholder without programming experience, he acquired the necessary background knowledge very quickly and efficiently put in place the software framework, spanning several languages and I/O constraints. He did so enthusiastically and communicated very efficiently to the whole team. We all were very impressed and cannot recommend him enough. We would, without hesitation, work with Akeel in the future and very much hope to do so!&quot;
                            </p>
                        </i>
                        <div className="testimonials__person">
                            Dr. Garrit Koller -
                            Clinical Academic in Biomaterials, Biomimetics and Biophotonics -
                            King&apos;s College London
                        </div>
                    </section>

                    <section>
                        <i>
                            <p>
                                “IT Energy Systems and Consulting Limited is a UK company that builds software solutions for the oil and shipping industries. Examples of our products include www.isfwatchkeeper.com which is a market leading product in the international shipping industry. We work with talented individuals who are self-motivated and driven to use technology for positive change
                            </p>
                            <p>
                                Akeel Mughal worked for IT Energy on a contract basis between March – December 2017. The technologies used were: React, ES6, WebPack, node.js, VB.NET, C#, ASP.NET, WCF and SQL Server. Akeel is a highly professional and skilled developer with a particular interest in innovation. He is also a great team player and a lot of fun to work with. He would be an asset to any team needing specialised knowledge and team capability”
                            </p>
                        </i>
                        <div className="testimonials__person">
                            Michael Papageorge  -
                            Co-founder / Managing Director -
                            IT Energy
                        </div>
                    </section>

                    <section>
                        <i>
                            <p>
                                “Akeel was hired on short notice to fly out to Berlin for a week long contract to assist at Cisco Live 2017. The brief was to assist delegates with coding robots to autonomously solve a maze.
                            </p>
                            <p>
                                He proved to be approachable, friendly and confident with the delegates, and was enthusiastic about understanding our requirements. Akeel was a pleasure to work with.”
                            </p>
                        </i>
                        <div className="testimonials__person">
                            Zara Kerwood  -
                            Digital Project Manager -
                            George P. Johnson
                        </div>
                    </section>

                    <section>
                        <i>
                            <p>
                                “Working with Akeel has been a great experience. He always responded to my requests quickly and provided us with good solutions quickly! Would hire again!”
                            </p>
                        </i>
                        <div className="testimonials__person">
                            Ole Andreas Biggey -
                            CEO -
                            Box of Words 
                        </div>
                    </section>

                </div>
            </ContentSection>
        );
    }
}

