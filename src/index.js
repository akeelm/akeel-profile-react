import React from "react";
import ReactDOM from "react-dom";
import Menu from './components/menu/menu.jsx';
import MobileMenu from './components/mobile-menu/mobile-menu.jsx';
import Banner from './components/banner/banner.jsx';
import ContentSection from './components/content-section/content-section.jsx';
import ScreensizeUpdater from './components/screen-size-updater/screen-size-updater.jsx';

import './index.scss';

import { updateStateWithScreenBreakpoint } from './functions/screen-functions';

class Index extends React.Component {
  constructor() {
    super();

    this.state = { screenBreakpoint : '' }
  }

  componentDidMount() {
    updateStateWithScreenBreakpoint(window, this);
    window.addEventListener("resize", () => { updateStateWithScreenBreakpoint(window, this) });
  }

  render() {
    let menu = (
      this.state.screenBreakpoint === 'small' || 
      this.state.screenBreakpoint === 'small-medium') 
      ? <MobileMenu /> : <Menu />;

    return (
      <div>
        {menu}
        <Banner mainText="Akeel Mughal" secondaryText="fullstack developer" />
        <ContentSection sectionName="About" />
        <ContentSection sectionName="Projects" />
        <ContentSection sectionName="Testimonials" />
        <ContentSection sectionName="Contact" />
      </div>
    )
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));