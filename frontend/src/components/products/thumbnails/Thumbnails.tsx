import DisplayThumbnail from '../../common/display/Display'
import { Thumbnail_Data } from '../../../../data/thumbnail_data'


const Thumbnails: React.FC = () => {
  return (
    <div>
      {Thumbnail_Data.map((props, idx) => (
        <DisplayThumbnail key={idx} {...props} />
      ))}
    </div>
  )
}

export default Thumbnails
