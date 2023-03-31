// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageItems, isClickThumbnails, isActiveStatus} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageItems
  const activeColor = isActiveStatus ? `thumbnail active` : `thumbnail`
  const onClickChangeImage = () => {
    isClickThumbnails(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onClickChangeImage}
        className="thumbnail-button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeColor}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
