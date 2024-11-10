'use client';

import React, { useEffect, useState } from 'react';
import Input from '../../components/auth/input/input';
import Header from '../../components/auth/header/header';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

const Auth = () => {
    const router = useRouter();

    const [inputValue1, setInputValue1] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
    const [authorized, setAuthorized] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'value1') {
            setInputValue1(value);
        } else {
            setInputValue2(value);
        }
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleLoginClick = () => {
        const newErrors: { [key: string]: string } = {};
        if (!inputValue1) {
            newErrors.value1 = 'не может быть пустым';
        }
        if (!inputValue2) {
            newErrors.value2 = 'не может быть пустым';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } if (inputValue1 === 'akim' && inputValue2 === 'cyberzone') {
            setAuthorized(true);
        }
    };

    useEffect(() => {
        if (authorized) {
            router.push('/');
        }
    }, [authorized, router]);

    return (
        <div className={styles.login}>
            <Header />
            <div className={styles.login__wrapper}>
                <div className={styles.login__content}>
                    <div className={styles.login__head}>
                        <img src="" alt="" />
                        <div className={styles.login__text}>Вход</div>
                    </div>
                    <div className={styles.login__inputs}>
                        <Input
                            name="value1"
                            value={inputValue1}
                            onChange={handleInputChange}
                        />
                        {errors.value1 && <div className={styles.error}>{errors.value1}</div>}
                        <Input
                            name="value2"
                            value={inputValue2}
                            onChange={handleInputChange}
                        />
                        {errors.value2 && <div className={styles.error}>{errors.value2}</div>}
                        <p className={styles.tip}>akim</p>
                        <p className={styles.tip}>cyberzone</p>
                    </div>
                    <button className={styles.login__button} onClick={handleLoginClick}>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
