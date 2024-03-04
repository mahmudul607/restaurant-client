import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, onChange, onClickItem, onClickThumb } from 'react-responsive-carousel';
import './Banner.css'
import img1  from '../../../assets/home/01.jpg'
import img2  from '../../../assets/home/02.jpg'
import img3  from '../../../assets/home/03.png'
import img4  from '../../../assets/home/04.jpg'
import img5  from '../../../assets/home/05.png'
import img6  from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <section className="banner">
            <Carousel className="Banner" autoPlay={true} showArrows={true} showStatus={false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2}/>
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                <div>
                    <img src={img5}/>
                    
                </div>
                <div>
                    <img src={img6} />
                    
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;