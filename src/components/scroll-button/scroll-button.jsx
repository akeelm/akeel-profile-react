import React from 'react';
import ReactDOM from 'react-dom';
import './scroll-button.scss';

export default class ScrollButton extends React.Component {
    constructor() {
        super();

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        document.querySelector(this.props.topPageClass).scrollIntoView({
            behavior: 'smooth'
        });
        console.log('ScrollButton firing to top');
    }

    render() {
        let scrollButtonOnClass = (this.props.screenScrollY > 0) ? 
            'scroll_button scroll_button--on' : 
            'scroll_button';

        return (
          <div className={scrollButtonOnClass} onClick={this.scrollToTop}>
            <i className="fa fa-chevron-up fa-lg"></i>
          </div>  
        );
    }
}