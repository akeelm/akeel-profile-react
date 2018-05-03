import React from 'react';
import ReactDOM from 'react-dom';
import './link.scss';

export default class Link extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <React.Fragment>
              <a className="link" href={this.props.href}>{this.props.title}</a>
          </React.Fragment>  
        );
    }
}