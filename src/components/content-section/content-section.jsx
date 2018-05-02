import React from 'react';
import ReactDOM from 'react-dom';
import './content-section.scss';

export default class ContentSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div id={this.props.sectionName} className="content-section">
            <h1>{this.props.sectionName}</h1>
          </div>  
        );
    }
}
