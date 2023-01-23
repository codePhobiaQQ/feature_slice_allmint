import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router';
import styles from './LayoutMain.module.css';
import cn from 'classnames';

const LayoutMain = () => {
  return (
    <div className={cn(styles.LayoutMain)}>
      <Header />

      <div className={cn(styles.NavigationContent, 'flex')}></div>

      <div className={`${styles.ContentWrapper}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutMain;
