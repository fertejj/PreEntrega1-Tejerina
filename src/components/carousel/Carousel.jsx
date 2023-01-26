import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../../assets/imgCarousel/1-e.jpg'
import IMG2 from '../../assets/imgCarousel/2-e.jpg'
import IMG3 from '../../assets/imgCarousel/3-e.jpg'
import './Carousel.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 first"
          src={IMG1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;