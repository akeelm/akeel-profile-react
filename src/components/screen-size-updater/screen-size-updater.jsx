import React from 'react';

import { updateStateWithScreenBreakpoint } from './../../functions/screen-functions';

export default class ScreenSizeUpdater extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.addEventListener('resize', updateStateWithScreenBreakpoint(window, this));
    }

    render() {
        return (
          <div>
              {this.state.screenBreakpoint}
          </div>  
        );
    }
}
