// 프로필 아이콘

import React, { useState } from 'react';
import DropdownMenu from '../DropDownMenu/DropDownMenu.js';

const ProfileImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.container}>
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        style={styles.profileImage}
        onClick={toggleDropdown}
      />
      {isOpen && <DropdownMenu />}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default ProfileImage;
