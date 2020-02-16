import React from 'react';
import './link.scss';

export interface ILinkProps {
    sectionName: string;
    href: string;
    title: string;
}

export default class Link extends React.Component<ILinkProps, {}> {
    constructor(props: ILinkProps) {
        super(props);

        this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(e) {
        e.preventDefault();
        document.querySelector(`#${this.props.sectionName}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
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