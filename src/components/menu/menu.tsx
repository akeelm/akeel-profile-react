import React from 'react';
import './menu.scss';

import MenuItems from '../../content/menu-items/menu-items.jsx';

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <MenuItems />
      </ul>
    </nav>
  );
};

export default Menu;