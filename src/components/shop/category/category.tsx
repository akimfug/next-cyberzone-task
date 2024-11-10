'use client';
import styles from './category.module.scss';
import Card from '../card/card';
import {CardCategoryProps, ModalProps} from '@/types/types';
import { useState } from 'react';
import Modal from '../modal/modal';

interface CategoryProps {
    category: CardCategoryProps;
    likedItems: { [key: string]: boolean };
    handleLikeToggle: (id:string) => void;
    openModal: (modalData: ModalProps) => void;
    closeModal: () => void;
}

const Category: React.FC<CategoryProps> = ({ category, handleLikeToggle, likedItems, openModal, closeModal }) => {
    const {categoryTitle, cards} = category;
    return (
        <div>
            <div className={styles.category}>
                <div className={styles.category__header}>
                    {categoryTitle}
                </div>
                <div className={styles.category__goods}>
                    {cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                {...card}
                                liked={likedItems[card.id]}
                                handleLikeToggle={() => handleLikeToggle(card.id)}
                                openModal={() => openModal({...card, closeModal, likedItems})}     
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Category;