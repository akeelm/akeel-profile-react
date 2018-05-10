import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

export default class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div className="banner">
            <span className="banner__maintext">{this.props.mainText}</span>
            <span className="banner__secondarytext">{this.props.secondaryText}</span>
          </div>  
        );
    }
}

Banner.propTypes = {
    mainText: PropTypes.string,
    secondaryText: PropTypes.node
};