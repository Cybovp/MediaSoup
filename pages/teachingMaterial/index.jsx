import styles from './styles.module.css';
import Slider from "react-slick";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Home (){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);
    const slides = [
        {
          imageUrl: 'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k',
          altText: 'Slide 1 description',
          title: 'Slide 1 Title',
          description: 'Slide 1 content',
        },
        {
            imageUrl: 'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k',
            altText: 'Slide 1 description',
            title: 'Slide 1 Title',
            description: 'Slide 1 content',
        },
        {
            imageUrl: 'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k',
            altText: 'Slide 1 description',
            title: 'Slide 1 Title',
            description: 'Slide 1 content',
        },
        // ... other slide objects
      ];
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Adjust interval as needed (in milliseconds)

        return () => clearInterval(intervalId);
    }, [slides.length]);

    const handleSelectSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className={styles.body}>
            <Modal contentClassName={styles.myModalCT} backdropClassName={styles.myModalBD} show={showNavigation} onHide={()=>setShowNavigation(false)}>
                <Modal.Body className={styles.modalBody}>
                    <div className={styles.headerNavigation}>
                        <Link className={styles.link} href="http://localhost:3000/teachingMaterial">Trang chủ</Link>
                    </div>
                    <div className={styles.headerNavigation}>
                        Hình ảnh trực quan
                    </div>
                    <div className={styles.headerNavigation}>
                        Video
                    </div>
                    <div className={styles.headerNavigation}>
                        <Link className={styles.link} href="http://localhost:3000/teachingMaterial/teachingGame">Trò chơi học tập</Link>
                    </div>
                    <div className={styles.headerNavigation}>
                        <Link className={styles.link} href="http://localhost:3000/teachingMaterial/teachingDocument">Tài liệu giảng dạy</Link>
                    </div>	
				</Modal.Body>
            </Modal>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <img src='https://lh3.googleusercontent.com/sZCtuI5NKeq_V0sn3AxE4u8ZPabmvIpeld3HH7dYT5EWUL0OuutlqK15gZ8ml6hyKLfuC-pPDsLINltHJi5V8FlDBqUgLpf3fQ=w57-rw'>

                    </img>
                </div>
                <div className={styles.headerNavigation}>
                    <Link className={styles.link} href="http://localhost:3000/teachingMaterial">Trang chủ</Link>
                </div>
                <div className={styles.headerNavigation}>
                    Hình ảnh trực quan
                </div>
                <div className={styles.headerNavigation}>
                    Video
                </div>
                <div className={styles.headerNavigation}>
                    <Link className={styles.link} href="http://localhost:3000/teachingMaterial/teachingGame">Trò chơi học tập</Link>
                </div>
                <div className={styles.headerNavigation}>
                    <Link className={styles.link} href="http://localhost:3000/teachingMaterial/teachingDocument">Tài liệu giảng dạy</Link>
                </div>
            </div>
            <div className={styles.headerMobile}>
                <Image onClick={()=>setShowNavigation(true)} style={{objectFit:'cover', marginLeft: '20px'}} width={20} height={40} src={'/gameImg/Mega menu.png'} alt='' />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.banner}>
                    <p style={{
                        fontSize: '18px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        width: '100%',
                    }}>Khoa giáo dục tiểu học</p>
                    <h1 style={{
                        fontSize: '72px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        width: '100%',
                        fontFamily: 'EB Garamond'
                    }}>Primary Teacher's Choice</h1>
                    <p>Trang web cung cấp một kho tài nguyên dữ liệu phong phú và đa dạng giúp giáo viên tiểu học xây dựng hoạt động học tập sáng tạo và hấp dẫn cho học sinh đầu tiểu học. Trang web bao gồm rất nhiều hình ảnh, video trực quan sinh động minh họa cho nội dung bài học; các trò chơi học tập giúp tăng hứng thú học tập cho học sinh tiểu học. Ngoài ra, trang web còn cung cấp ý tưởng thiết kế hoạt động và các tài liệu giảng dạy giúp giáo viên tận dụng tối đa sự sáng tạo của mình.</p>
                </div>
                <div className={styles.slideShow}>
                    <Carousel
                        showArrows={true} // Enable navigation arrows
                        showThumbs={false} // Disable thumbnails (optional)
                        infiniteLoop={true} // Enable continuous looping
                        autoPlay={true} // Enable automatic play
                        interval={5000} // Adjust interval as needed (in milliseconds)
                        onSelectSlide={handleSelectSlide}
                        currentIndex={currentIndex}
                        >
                        {slides.map((slide, index) => (
                            <div key={index} className="slide">
                                <img style={{width: '80%', height: '400px', objectFit: 'cover'}} src={slide.imageUrl} alt={slide.altText} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className={styles.imagesArea}>
                    <div className={styles.ImageColumn}>
                        <div className={styles.ImageSmall}>
                            <img className={styles.image} src='https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'></img>
                        </div>
                        <div className={styles.ImageBig}>
                            <img className={styles.image} src='https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'></img>
                        </div>
                    </div>
                    <div className={styles.ImageColumn}>
                        <div className={styles.ImageBig}>
                            <img className={styles.image} src='https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'></img>
                        </div>
                        <div className={styles.ImageSmall}>
                            <img className={styles.image} src='https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'></img>
                        </div>
                    </div>
                    <div className={styles.ImageColumn}>
                        <div className={styles.ImageSmall}>
                            <img className={styles.image} src='https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'></img>
                        </div>
                        <div className={styles.ImageBig}>
                            <img className={styles.image} src='https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'></img>
                        </div>
                    </div>
                    <div className={styles.ImageColumn}>
                        <div className={styles.ImageBig}>
                            <img className={styles.image} src='https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'></img>
                        </div>
                        <div className={styles.ImageSmall}>
                            <img className={styles.image} src='https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.videoArea}>
                    <iframe width='100%' height='100%' src='https://youtube.com/embed/qpl5mOAXNl4' 
                        title='YouTube video player' frameBorder='0' 
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.leftFooter}>
                    <p className={styles.footerText} style={{
                        color: 'white',
                        fontSize: '30px',
                        padding: '20px',
                        fontWeight: '600'
                    }}>Liên hệ với chúng tôi</p>
                    <div style={{
                        color: 'white',
                        padding: '20px'
                    }}>
                        <div className={styles.footerText} style={{
                            fontSize: '25px',
                            fontWeight: '600',
                        }}>
                            Địa chỉ
                        </div> 
                        <div className={styles.footerText}>
                            Mèo mèo mèo mèo mèo
                        </div>
                    </div>
                    <div className={styles.footerText} style={{
                        color: 'white',
                        padding: '20px',
                        fontWeight: '600'
                    }}>
                        <div style={{
                            fontSize: '25px'
                        }}>
                            Liên hệ
                        </div> 
                        <div>
                            0000000000
                        </div>
                        <div>
                            meo@gmail.com
                        </div>
                    </div>
                </div>
                <div className={styles.rigtFooter}>
                    <p className={styles.footerText} style={{
                        color: 'white',
                        fontSize: '30px',
                        padding: '20px',
                        fontWeight: '600'
                    }}>Please like and subscribe to my Chanel=)))))</p>
                    <div className={styles.inputArea}>
                        <label className={styles.footerText} style={{
                            color: 'white',
                            fontSize: '25px',
                            width: '100%',
                            fontWeight: '600'
                        }}>Tên</label>
                        <input className={styles.input} type='text'></input>
                    </div>
                    <div className={styles.inputArea}>
                        <label className={styles.footerText} style={{
                            color: 'white',
                            fontSize: '25px',
                            width: '100%',
                            fontWeight: '600'
                        }}>Email</label>
                            <input className={styles.input} type='text'></input>
                        </div>
                    <div className={styles.inputArea}>
                        <label className={styles.footerText} style={{
                            color: 'white',
                            fontSize: '25px',
                            width: '100%',
                            fontWeight: '600'
                        }}>Số điện thoại</label>
                        <input className={styles.input} type='text'></input>
                    </div>
                    <button className={styles.button}>
                        <div style={{
                            fontWeight:'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color:'white',
                        }}>Đăng kí</div>
                    </button>
                </div>
            </div>
        </div>
    )
}