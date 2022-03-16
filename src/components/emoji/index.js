import './index.css'

const Emoji = props => {
  const {emoji, greet} = props
  const {id, name, imageUrl} = emoji

  return (
    <li className="list-container">
      <button type="button" onClick={greet} className="button">
        <img src={imageUrl} alt={name} key={id} className="emoji-image" />
        <p>{name}</p>
      </button>
    </li>
  )
}
export default Emoji
