'use client';
import ReactDOM from 'react-dom';
import { ModalProps } from '@/types/types';
import Like from '../card/like/like';
import styles from './modal.module.scss';

const Modal: React.FC<ModalProps> = ({ name, id, url, price, like, liked, closeModal, handleLikeToggle, likedItems }) => {
    if (!name) return null;
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    const hasPrice = Boolean(price);
    const modalInfoClass = `${styles.modal__info} ${hasPrice ? "" : styles.modal__info_one}`;

    return ReactDOM.createPortal(
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__inner} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal__close} onClick={closeModal}>X</div>
                <div className={styles.modal__img}><img src={url} alt={name} /></div>
                <div className={modalInfoClass}>
                    <div className={styles.modal__name}>{name}</div>
                    {price && <span className='modal__price'>{price}</span>}
                    {like !== undefined && <Like like={likedItems[id] ?? like} handleLikeToggle={handleLikeToggle} />}
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;