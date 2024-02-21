import styles from './styles.module.css';
import Slider from "react-slick";
export default function Home (){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={styles.body}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <img src='https://lh3.googleusercontent.com/sZCtuI5NKeq_V0sn3AxE4u8ZPabmvIpeld3HH7dYT5EWUL0OuutlqK15gZ8ml6hyKLfuC-pPDsLINltHJi5V8FlDBqUgLpf3fQ=w57-rw'>

                    </img>
                </div>
                <div className={styles.headerNavigation}>
                    Trang chủ
                </div>
                <div className={styles.headerNavigation}>
                    Hình ảnh trực quan
                </div>
                <div className={styles.headerNavigation}>
                    Video
                </div>
                <div className={styles.headerNavigation}>
                    Trò chơi học tập
                </div>
                <div className={styles.headerNavigation}>
                    Tài liệu giảng dạy
                </div>
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
                {/* <div className={styles.slideShow}>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div> */}
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
                    <p style={{
                        color: 'white',
                        fontSize: '30px',
                        padding: '20px'
                    }}>Liên hệ với chúng tôi</p>
                    <div style={{
                        color: 'white',
                        padding: '20px'
                    }}>
                        <div style={{
                            fontSize: '25px'
                        }}>
                            Địa chỉ
                        </div> 
                        <div>
                            Mèo mèo mèo mèo mèo
                        </div>
                    </div>
                    <div style={{
                        color: 'white',
                        padding: '20px'
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
                    <p style={{
                        color: 'white',
                        fontSize: '30px',
                        padding: '20px'
                    }}>Please like and subscribe to my Chanel=)))))</p>
                    <div className={styles.inputArea}>
                        <label style={{
                            color: 'white',
                            fontSize: '25px',
                            width: '100%',
                        }}>Tên</label>
                        <input className={styles.input} type='text'></input>
                    </div>
                    <div className={styles.inputArea}>
                        <label style={{
                            color: 'white',
                            fontSize: '25px',
                            width: '100%',
                        }}>Email</label>
                            <input className={styles.input} type='text'></input>
                        </div>
                    <div className={styles.inputArea}>
                        <label style={{
                            color: 'white',
                            fontSize: '25px',
                            width: '100%',
                        }}>Số điện thoại</label>
                        <input className={styles.input} type='text'></input>
                    </div>
                    <button className={styles.button}>
                        <div style={{
                            fontWeight:'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>Đăng kí</div>
                    </button>
                </div>
            </div>
        </div>
    )
}