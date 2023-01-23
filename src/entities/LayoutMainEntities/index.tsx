import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router';
import styles from './LayoutMain.module.css';
import cn from 'classnames';

const LayoutMainEntities = () => {
  return (
    <div className={cn(styles.LayoutMain)}>
      <Header />

      <div className={cn(styles.NavigationContent, 'flex')}>
        {/* MainNavigation */}
        <div className={cn(styles.leftSide, 'flex')}>{'Menu general'}</div>
        <div className={cn(styles.rightSide)}>
          <div className={cn(styles.rightSideInner)}>
            {/* SubNav & Filters */}
            <div
              className={cn(
                styles.rightSideBorderInner,
                'flex',
                'items-center'
              )}
            >
              {/* SubLinks */}

              {/* Filters */}
            </div>

            {/* Content */}
            <div className={`${styles.ContentWrapper}`}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMainEntities;
