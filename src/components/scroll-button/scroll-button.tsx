import React from 'react';
import './scroll-button.scss';

export interface IScrollButtonProps {
  topPageClass: string;
  screenScrollY: number;
}

export default class ScrollButton extends React.Component<IScrollButtonProps, {}> {
    constructor(props: IScrollButtonProps) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        document.querySelector(this.props.topPageClass)?.scrollIntoView({
            behavior: 'smooth'
        });
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
