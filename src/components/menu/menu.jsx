import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

import Link from './../link/link.jsx';
import MenuItems from './../../content/menu-items/menu-items.jsx';

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="menu">
                <ul>
                    <MenuItems />
                </ul>
            </nav>
        );
    }
}