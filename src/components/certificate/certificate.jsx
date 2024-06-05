import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './certificate.module.css'; 

const Certificate = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1, // ตั้งค่า slidesToShow เพื่อให้เลื่อนไปทางขวา
      slidesToScroll: 1,
      autoplay: true, // เปิดใช้งานการเลื่อนอัตโนมัติ
      autoplaySpeed: 3000 // กำหนดเวลาในการเลื่อนอัตโนมัติ (2 วินาที)
    };
    
    return (
    <section className={styles.container} id="certificate">
        
      <div className={styles["slider-container"]} >
      <h2 className={styles["slider-header"]}>Certificate</h2>
        <Slider {...settings} initialSlide={0}>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/front.png" alt="Slide 1" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/database.png" alt="Slide 2" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/excal.png" alt="Slide 3" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/born.png" alt="Slide 4" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/cyberbasic.png" alt="Slide 5" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/hp.png" alt="Slide 6" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/network.png" alt="Slide 7" />
          </div>
          <div className={styles["slide"]}>
            <img src="https://portfolio-supanut.vercel.app/assets/certificate/openlearn.png" alt="Slide 8" />
          </div>
        </Slider>
      </div>
      </section>
    );
}

export default Certificate;
