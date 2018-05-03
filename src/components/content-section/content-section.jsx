import React from 'react';
import ReactDOM from 'react-dom';
import './content-section.scss';

export default class ContentSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div className="content-section">
            <div id={this.props.sectionName}></div>
            {this.props.children}
          </div>  
        );
    }
}
