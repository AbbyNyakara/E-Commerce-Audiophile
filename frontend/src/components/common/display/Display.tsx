import styles from './Display.module.css'
import { FC } from 'react'
import { DisplayProps } from '../../../types/Display'

const DisplayThumbnail: FC<DisplayProps> = ({
  imgSrc,
  imgAlt,
  linkHref,
  title,
}) => {
  return (
    <div className={styles.displayCard}>
      <img src={imgSrc} className={styles.displayImg} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      <a href={linkHref} className={styles.link}>
        shop <img src={'/assets/shared/desktop/icon-arrow-right.svg'} className={styles.thumbnailImg} />
      </a>
    </div>
  )
}

export default DisplayThumbnail
