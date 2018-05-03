import React from 'react';
import ReactDOM from 'react-dom';
import './scroll-button.scss';

export default class ScrollButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        let scrollButtonOnClass = (this.props.screenScrollY > 0) ? 
            'scroll_button scroll_button--on' : 
            'scroll_button';

        return (
          <div className={scrollButtonOnClass}>
            <i className="fa fa-chevron-up fa-lg"></i>
          </div>  
        );
    }
}