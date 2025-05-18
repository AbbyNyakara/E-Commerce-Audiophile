import { Card } from 'react-bootstrap'
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
    <Card className={styles.displayCard}>
      <Card.Img src={imgSrc} className={styles.displayImg} alt={imgAlt} />
      <Card.Title className={styles.title}>{title}</Card.Title>
      <a href={linkHref} className={styles.link}>
        shop <img src={'/assets/shared/desktop/icon-arrow-right.svg'} />
      </a>
    </Card>
  )
}

export default DisplayThumbnail
