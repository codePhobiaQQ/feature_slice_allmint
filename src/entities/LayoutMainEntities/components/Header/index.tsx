import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';

const Header = () => {
  return (
    <div className={cn('flex', 'items-center', styles.header)}>
      <div className={cn('p_l_20', 'p_t_12', 'p_b_12', styles.accountInfo)}>
        {/* <PersonalData /> */}
      </div>
      <div
        className={cn(
          'p_l_20',
          'p_r_20',
          'items-center',
          'justify-between',
          styles.headerRightSide
        )}
      >
        {/* <SearchInput /> */}

        {/* <HrefAtom href={'/'}>
          <ImageIcon imgUrl={logo} classing={'w_40 h_40'} />
        </HrefAtom> */}

        <div className={cn('flex', 'items-center')}>
          {/* <ColorSwitcher classing={'m_r_20'} />
          <LanguageSwitcher classing={'m_r_20'} />
          <WalletSwitcher /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
