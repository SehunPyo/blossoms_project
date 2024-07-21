// 드롭다운 메뉴

import React from 'react';

const DropdownMenu = () => {
  return (
    <ul className='DropDownMenu'>
      <li style={styles.menuItem}>Profile</li>
      <li style={styles.menuItem}>Settings</li>
      <li style={styles.menuItem}>Logout</li>
    </ul>
  );
};

const styles = {
  menuItem: {
    padding: '10px 20px',
    cursor: 'pointer',
    hover: {
      backgroundColor: '#f0f0f0',
    },
  },
};

export default DropdownMenu;
