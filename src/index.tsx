import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu.jsx';
import MobileMenu from './components/mobile-menu/mobile-menu.jsx';
import Banner from './components/banner/banner.jsx';
import ScrollButton from './components/scroll-button/scroll-button.jsx';

import About from './content/about/about.jsx';
import Projects from './content/projects/projects.jsx';
import Testimonials from './content/testimonials/testimonials.jsx';
import Contact from './content/contact/contact.jsx';

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
        <Banner mainText="Akeel Mughal" secondaryText="fullstack developer" />
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