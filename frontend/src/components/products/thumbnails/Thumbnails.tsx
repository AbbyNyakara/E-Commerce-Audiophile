import DisplayThumbnail from '../../common/display/Display'
import { Thumbnail_Data } from '../../../data/thumbnail_data'
import styles from './Thumbnails.module.css'

const Thumbnails: React.FC = () => {
  return (
    <div className={styles.thumbnails}>
      {Thumbnail_Data.map((props, idx) => (
        <DisplayThumbnail key={idx} {...props} />
      ))}
    </div>
  )
}

export default Thumbnails
