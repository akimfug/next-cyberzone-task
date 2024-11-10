import React from 'react';
import styles from './input.module.scss';

interface InputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
const Input: React.FC<InputProps> = ({ name, value, onChange }) => {

    return (
        <input 
            className={styles.login__input}
            placeholder={'Введите значение'} 
            onChange={onChange} 
            value={value} 
            name={name}
        />

    );
}


export default Input