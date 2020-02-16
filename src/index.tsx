import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu';
import MobileMenu from './components/mobile-menu/mobile-menu';
import { Banner } from './components/banner/banner';
import ScrollButton from './components/scroll-button/scroll-button';

import About from './content/about/about';
import Projects from './content/projects/projects';
import Testimonials from './content/testimonials/testimonials';
import Contact from './content/contact/contact';

import 'font-awesome/scss/font-awesome.scss';
import './index.scss';

import { updateStateWithScreenBreakpoint } from './functions/screen-functions';

export interface IIndexState {
  screenBreakpoint: string;
  screenScrollY: number;
}

class Index extends React.Component<{}, IIndexState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      screenBreakpoint : '', 
      screenScrollY: 0 
    };
  }


  componentDidMount() {
    updateStateWithScreenBreakpoint(window, this);
    window.addEventListener('resize', () => { updateStateWithScreenBreakpoint(window, this); });

    window.addEventListener('scroll', () => {
      this.setState({screenScrollY : window.scrollY});
    });
  }

  render() {
    let menu = (
      this.state.screenBreakpoint === 'small' || 
      this.state.screenBreakpoint === 'small-medium') 
      ? <MobileMenu /> : <Menu />;

    return (
      <div>
        <div className="top_of_page"></div>
        {menu}
        <Banner mainText="Akeel Mughal." secondaryText="react developer" />
        <About />
        <Testimonials />
        <Projects />
        <Contact />
        <ScrollButton screenScrollY={this.state.screenScrollY} topPageClass=".top_of_page" /> 
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('index'));