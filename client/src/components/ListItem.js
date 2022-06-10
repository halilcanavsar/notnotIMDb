import { Link } from 'react-router-dom'


const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/shows/${id}`} className='list-item'>
      <div className='list-item-image'>
        <img src={image} alt={name} />
      </div>
      <div className='list-item-info'>
        <h3 className='list-item-name'>{name}</h3>
        <p className='list-item-rating'>{rating}</p>
      </div>
    </Link>
  )
}

export default ListItem