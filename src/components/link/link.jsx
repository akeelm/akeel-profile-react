import React from 'react';
import ReactDOM from 'react-dom';
import './link.scss';

export default class Link extends React.Component {
    constructor() {
        super();

        this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(e) {
        e.preventDefault();
        document.querySelector(`#${this.props.sectionName}`).scrollIntoView({
            behavior: 'smooth'
        });
    }

    render() {
        return (
          <React.Fragment>
              <a className="link" href={this.props.href} onClick={this.scrollToSection}>
                    {this.props.title}
              </a>
          </React.Fragment>  
        );
    }
}