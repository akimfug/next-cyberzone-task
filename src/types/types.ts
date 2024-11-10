export interface CardProps {
    id: string;
    name: string;
    url: string;
    price: number;
    like: boolean;
    liked: boolean;
    handleLikeToggle: () => void; // Упрощаем до функции без аргументов
    openModal: () => void; // Без параметров, т.к. данные передаются при инициализации
}

export interface CardCategoryProps {
    categoryTitle: string;
    cards: CardProps[];
}

export type AllGoods = CardCategoryProps[];

export interface ModalProps {
    
    id: string;
    name: string;
    url: string;
    price: number;
    like: boolean;
    liked: boolean;
    closeModal: () => void;
    handleLikeToggle: () => void; 
    likedItems: { [key: string]: boolean };
}

export interface LikeProps {
    like: boolean;
    handleLikeToggle: () => void;
}
