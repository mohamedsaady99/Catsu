import { Image } from 'antd';
import './gallary.css'
import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import image6 from '../../assets/images/6.jpg'
import image7 from '../../assets/images/7.webp'
import image8 from '../../assets/images/8.jpg'
import image9 from '../../assets/images/9.jpeg'
import image10 from '../../assets/images/10.jpg'
import image11 from '../../assets/images/11.jpg'
import image12 from '../../assets/images/12.webp'
const Gallary = () => (
  <div className='gallary' id="gallary">
    <h2>Gallary</h2>
    <Image.PreviewGroup>
      <Image src={image1} />
      <Image src={image2} />
      <Image src={image3} />
      <Image src={image4} />
      <Image src={image5} />
      <Image src={image6} />
      <Image src={image7} />
      <Image src={image8} />
      <Image src={image9} />
      <Image src={image10} />
      <Image src={image11} />
      <Image src={image12} />
    </Image.PreviewGroup>
  </div>
);

export default Gallary