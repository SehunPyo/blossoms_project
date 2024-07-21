// 알림 아이콘

import React, { useState } from 'react';

import './Notification.css';


const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div style={styles.container}>
          <img
            src="https://via.placeholder.com/40"
            alt="Notification"
            style={styles.Notification}
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
        Notification: {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
        },
      };
      
      export default Notification;
      