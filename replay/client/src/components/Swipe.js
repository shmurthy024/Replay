import React from 'react';
import './Swipe.css';
    
 // Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
  {
    id: 1,
    username: 'Kobe024',
    testimonial: 'This song is absolutely amazing!!! Definetly listen to it'
  },
  {
    id: 2,
    username: 'jdell',
    testimonial: 'beautiful instrumental'
  },
  {
    id: 3,
    username: 'anyon23',
    testimonial: 'Totally amazing will listen again.'
  },
  {
    id: 4,
    username: 'jCoolaid',
    testimonial: 'THE LYRICS ARE FUEGO!!!!'
  },
]
   
class Swipe extends React.Component{


    render() {

        return(
        
        <div className="SwiperDiv">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    { data.map( user => (
                        <SwiperSlide key={user.id} className="postSlide">
                        <div className="slide-content">
                            <div className="user-image">
                            <img src="/eren.jpg" alt="" className="user-photo"/>
                            </div>
                            <h5>{user.username}</h5>
                            <p className="user-testimonial"> " <i>{user.testimonial}</i> "</p>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>

        )
    }


};


export default Swipe;