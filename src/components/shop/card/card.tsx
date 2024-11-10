import React from 'react';
import { CardProps } from '../../../types/types';
import styles from './card.module.scss';
import Like from './like/like';

const Card: React.FC<CardProps> = ({ id, name, url, price, like, liked, handleLikeToggle, openModal }) => {
    const modalData = { id, name, url, price, like, liked, handleLikeToggle};
    console.log(modalData)
    console.log("данные передающуеся в модальное окно:::")
    return (
        <div className={styles.card}>
            <div className={styles.card__img} onClick={() => openModal()}>
                <img src={url} className='card__image' alt={name} />
            </div>
            <div className={styles.card__info} onClick={(e) => e.stopPropagation()}>
                <div className={styles.card__name}>{name}</div>
                {price && <span className='card__price'>{price} ₽</span>}
                {like !== undefined && <Like
                    like={liked ? liked : like}
                    handleLikeToggle={handleLikeToggle}
                />}
            </div>
        </div>
    );
};

export default Card;
