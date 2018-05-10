import React from 'react';
import PropTypes from 'prop-types';
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

ContentSection.propTypes = {
    sectionName: PropTypes.string,
    children: PropTypes.node
};