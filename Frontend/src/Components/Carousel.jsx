import images from '../../../Backend/Data/images.json'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const CarouselAap = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {
        images.map((image) => {
          return (
            <Carousel.Item key={image.url}>
              <img src={image.url} alt="" style={{ width: 'auto', maxWidth: '100%' }} />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}
export { CarouselAap };