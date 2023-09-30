
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const SliderBanner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <div className="relative">
                    <img src="https://img.freepik.com/free-psd/chinese-food-banner-template_23-2148679553.jpg" alt="Banner Image" className="w-full bg-cover" />
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative ">
                    <img src="https://img.freepik.com/premium-psd/chinese-food-banner-template_23-2148679550.jpg" className="w-full bg-cover" />
                   
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="relative ">
                    <img src="https://img.freepik.com/free-psd/chinese-food-banner-template_23-2148679553.jpg" className="w-full bg-cover" />
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative ">
                    <img src="https://img.freepik.com/premium-psd/chinese-food-landing-page-template_23-2148679548.jpg" className="w-full bg-cover" />
                   
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative ">
                    <img src="https://img.freepik.com/free-psd/chinese-food-banner-template_23-2148679551.jpg" className="w-full bg-cover" />
                   
                </div>
                </SwiperSlide>
            </Swiper>
    );
};

export default SliderBanner;

