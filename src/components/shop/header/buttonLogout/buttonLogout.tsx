'use client';
import React from 'react';
import styles from './buttonLogout.module.scss';
import Link from 'next/link';

const Button = () => {
  return (
    <Link href={'/auth'}>
        <button className={styles.logout__button}>
        Выйти
        </button>
    </Link>
    
  );
};

export default Button;