'use client';
import React from 'react';
import Logo from './logo/logo';
import ButtonLogout from './buttonLogout/buttonLogout';
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ButtonLogout />
    </header>
  );
};

export default Header;