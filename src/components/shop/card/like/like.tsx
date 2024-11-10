import React from 'react'
import styles from './like.module.scss'
import { LikeProps } from '@/types/types'


const Like: React.FC<LikeProps> = ({like, handleLikeToggle}) => {
  let src: string = like ? '/images/liked.svg' : '/images/like.svg'

  return (
    <div className={styles.card__like}>
      <img src={src} onClick={handleLikeToggle} alt="" />
    </div>
  )
}

export default Like