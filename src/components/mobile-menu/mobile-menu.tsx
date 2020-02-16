import React from 'react';
import './mobile-menu.scss';

import MenuItems from '../../content/menu-items/menu-items';

export interface IMobileMenuState {
    menuOpen: Boolean;
}

export default class MobileMenu extends React.Component<{}, IMobileMenuState> {
    constructor(props: {}) {
        super(props);

        this.state = { menuOpen : false };
        this.toggleMenuClass = this.toggleMenuClass.bind(this);
    }

    toggleMenuClass() {
        const currentState = this.state.menuOpen;
        this.setState({ menuOpen : !currentState });
    }

    render() {
        let mobileToggleClass = (this.state.menuOpen) ? 
            'mobile_menu__toggle mobile_menu__toggle--open' : 
            'mobile_menu__toggle';

        let mobileMenuClass = (this.state.menuOpen) ?
            'mobile_menu__list mobile_menu__list--open' : 
            'mobile_menu__list';

        return (
            <nav className="mobile_menu">
                <div className="mobile_menu__toggle_container" onClick={this.toggleMenuClass}>
                    <div className={mobileToggleClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={mobileMenuClass}>
                    <MenuItems />
                </ul>
            </nav>
        );
    }
}
