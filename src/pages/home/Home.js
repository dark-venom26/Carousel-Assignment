import { images } from '../../sampleData'
import './home.scss'
import Carousel from '../../components/carousel/Carousel'

function Home() {
  return (
    <div className="home">
        <Carousel images={images}/>
    </div>
    )
}

export default Home