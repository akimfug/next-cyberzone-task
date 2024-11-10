'use client'
import { useState, useEffect } from 'react';
import fetchGoods from '../api/fetch';
import Header from '../components/shop/header/header';
import Modal from '../components/shop/modal/modal';
import { AllGoods, ModalProps } from '@/types/types';
import Category from '../components/shop/category/category';

const Shop: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [data, setData] = useState<AllGoods | null>(null);
    const [modalData, setModalData] = useState<ModalProps | null>(null);
    const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});

    const handleLikeToggle = (id: string) => {
        setLikedItems((prev) => {
            const updatedLikedItems = {
                ...prev,
                [id]: !prev[id],
            };
            if (modalData && modalData.id === id) {
                setModalData((prevModalData) => {
                    if (!prevModalData) return prevModalData;
                    return {
                        ...prevModalData,
                        liked: updatedLikedItems[id],
                    };
                });
            }
            return updatedLikedItems;
        });
    };

    const handleOpenModal = (modalData: ModalProps) => {
        setModalActive(true);
        setModalData(modalData);
    };

    const handleCloseModal = () => {
        setModalActive(false);
        setModalData(null);
    };

    const loadGoods = async () => {
        try {
            const goods = await fetchGoods();
            setData(goods);
        } catch (error) {
            console.error('Failed to fetch goods:', error);
        }
    };

    useEffect(() => {
        loadGoods();
    }, []);

    return (
        <>
            <Header />
            {data &&
                data.map((item, index) => (
                    <Category
                        key={index}
                        category={item}
                        handleLikeToggle={handleLikeToggle}
                        likedItems={likedItems}
                        openModal={handleOpenModal}
                        closeModal={handleCloseModal}
                    />
                ))}
            {modalActive && modalData && (
                <Modal
                    {...modalData}
                    handleLikeToggle={() => handleLikeToggle(modalData.id)}
                    closeModal={handleCloseModal}
                    likedItems={likedItems}
                />
            )}
        </>
    );
};

export default Shop;
