import React from 'react';
import ReactDOM from 'react-dom';
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