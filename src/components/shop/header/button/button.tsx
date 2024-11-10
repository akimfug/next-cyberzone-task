'use client';
import React from 'react';
import styles from './button.module.scss';

const Button = () => {
  return (
    <button className={styles.login__button}>
      Войти
    </button>
  );
};

export default Button;