import { images } from '../../sampleData';
import './details.scss'
import { useParams } from "react-router-dom"

function Details() {
   const id = useParams().id;

  return (
    <div className='details'>
        <div className="details__block">
            <img src={images[id].imageUrl} alt={images[id].title} className='details__block__img' />
            <div className="details__block__desc">
                <p className='details__block__desc__title'>{images[id].title}</p>
                <p className='details__block__desc__para' >{images[id].details}</p>
            </div>
        </div>
    </div>
  )
}

export default Details