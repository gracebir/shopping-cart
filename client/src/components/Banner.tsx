import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3000}
                    >
                    <div>
                        <img  loading='lazy' src="https://res.cloudinary.com/dnzidlufh/image/upload/v1627108669/ucyrgvgg0lwhyfmnd2c9.jpg" alt="..."/>
                        
                    </div>
                    <div>
                        <img  loading='lazy' src="https://res.cloudinary.com/dnzidlufh/image/upload/v1627108703/aei4rqux89fpan89oy0h.jpg" alt="..."/>
                    </div>
                    <div>
                        <img  loading='lazy' src="https://res.cloudinary.com/dnzidlufh/image/upload/v1627108715/pfm61xsvivewidxtjjig.jpg" alt='...'/>
                    </div>
                </Carousel>
            
        </div>
        
    )
}

export default Banner
