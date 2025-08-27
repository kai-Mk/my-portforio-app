import React from 'react';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header_title}>Kaito Mizuuchi</h1>
    </header>
  );
};

export default Header;
