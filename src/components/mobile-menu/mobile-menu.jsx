import React from 'react';
import ReactDOM from 'react-dom';
import './mobile-menu.scss';

import Link from './../link/link.jsx';

export default class MobileMenu extends React.Component {
    constructor() {
        super();

        this.state = { menuOpen : false };
        this.toggleMenuClass = this.toggleMenuClass.bind(this);
    }

    toggleMenuClass() {
        const currentState = this.state.menuOpen;
        this.setState({ menuOpen : !currentState });
    };

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
                    <li>
                        <Link href="#" title="ABOUT"></Link>
                    </li>
                    <li>
                        <Link href="#" title="PROJECTS"></Link>
                    </li>
                    <li>
                        <Link href="#" title="TESTIMONIALS"></Link>
                    </li>
                    <li>
                        <Link href="#" title="CONTACT"></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
