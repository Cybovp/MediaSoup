import styles from './styles.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useEffect, useState } from 'react';

export default function TeachingImage(){
    const [stackImgOpacity, setStackImgOpacity] = useState(1);
    const [quadImgOpacity,setQuadImgOpacity] = useState(1);
    useEffect(()=>{
        const interval1 = setInterval(() => {
            setStackImgOpacity((currentOpacity) => {
              const newOpacity = (currentOpacity % 3) + 1; // Cycle through 1, 2, 3
              return newOpacity;
            });
            setQuadImgOpacity((currentOpacity) => {
                const newOpacity = (currentOpacity % 4) + 1; // Cycle through 1, 2, 3
                return newOpacity;
            });
          }, 2000);
          return () => clearInterval(interval1);
    },[]);
    return(
        <div className={styles.body}>
            <Header/>
            <div className={styles.mainContent}>
                <div className={styles.main}>
                    <div className={styles.firstSection}>
                        <div className={styles.colection1}>
                            <div className={styles.stackSection}>
                                <div className={`${styles.stackImg1} ${stackImgOpacity == 1 && styles.opacity1}`}>
                                    <img className={styles.img} src='data:image/jpeg;base64,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' />
                                </div>
                                <div className={`${styles.stackImg2} ${stackImgOpacity == 2 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/bs-01.jpg?resize=600%2C600&ssl=1' />
                                </div>
                                <div className={`${styles.stackImg3} ${stackImgOpacity == 3 && styles.opacity1}`}>
                                <img className={styles.img} src='https://i.pinimg.com/236x/f0/c3/72/f0c37285a919ab1364a8a28cd820e800.jpg' />
                                </div>
                            </div>
                            <div className={styles.stackSection}>
                                <div className={`${styles.stackImg1} ${stackImgOpacity == 1 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://mypathintheworld.com/wp-content/uploads/2021/11/Beautiful-European-squares-Piazza-San-Marco-in-Venice.jpg' />
                                </div>
                                <div className={`${styles.stackImg2} ${stackImgOpacity == 2 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://www.myglobalviewpoint.com/wp-content/uploads/2018/10/Sevilla-1024x682.jpg' />
                                </div>
                                <div className={`${styles.stackImg3} ${stackImgOpacity == 3 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg' />
                                </div>
                            </div>
                            <div className={styles.stackSection}>
                                <div className={`${styles.stackImg1} ${stackImgOpacity == 1 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/05/top-10-most-beautiful-places-on-earth-1684221540.jpg' />
                                </div>
                                <div className={`${styles.stackImg2} ${stackImgOpacity == 2 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://cdn4.sharechat.com/img_561733_3069ad75_1676468559155_sc.jpg?tenant=sc&referrer=tag-service&f=155_sc.jpg' />
                                </div>
                                <div className={`${styles.stackImg3} ${stackImgOpacity == 3 && styles.opacity1}`}>
                                    <img className={styles.img} src='https://t3.ftcdn.net/jpg/05/54/02/68/360_F_554026892_UsZG4Tm3GPUV6fxzlpvV0qOOe9KKYvCj.jpg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sencondSection}>
                        <div className={`${styles.sect2Img1} ${stackImgOpacity == 1 && styles.opacity1}`}>
                            <img className={styles.img} src='https://img.freepik.com/premium-photo/beautiful-landscape-with-lake-mountains-background_931576-17300.jpg' />
                        </div>
                        <div className={`${styles.sect2Img2} ${stackImgOpacity == 3 && styles.opacity1}`}>
                            <img className={styles.img} src='https://static.vecteezy.com/system/resources/previews/032/242/170/non_2x/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg' />
                        </div>
                        <div className={`${styles.sect2Img3} ${stackImgOpacity == 2 && styles.opacity1}`}>
                            <img className={styles.img} src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg' />
                        </div>
                    </div>
                    <div className={styles.thirdSection}>
                        <div className={styles.section31}>
                            <div className={styles.section311}>
                                <div className={styles.section312}>
                                    <div className={styles.sect3Img}>
                                        <img className={styles.img} src='https://e1.pxfuel.com/desktop-wallpaper/664/468/desktop-wallpaper-beautiful-world-best-pic-in-the-world-best-most-beautiful-places-on-earth.jpg' />
                                    </div>
                                    <div className={styles.sect3Img}>
                                        <img className={styles.img} src='https://media1.popsugar-assets.com/files/thumbor/W7xBMooTKm4JRstd4jojSYBoEqY=/0x0:7952x5304/fit-in/792x528/top/filters:format_auto():upscale()/2020/03/24/559/n/45101125/06c61ac25e79fc30a64224.30513518_.jpg' />
                                    </div>
                                    <div className={styles.sect3Img}>
                                        <img className={styles.img} src='https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg' />
                                    </div>
                                </div>
                                <div className={styles.section312}>
                                    <div className={styles.sect3Img}>
                                        <img className={styles.img} src='https://media.istockphoto.com/id/944812540/vi/anh/c%E1%BA%A3nh-quan-n%C3%BAi-ponta-delgada-azores.jpg?s=612x612&w=0&k=20&c=_Q2nGyKzOQDYK3FP8WChOfvOZAM0uw5R0t6Oi1WW_gQ=' />
                                    </div>
                                    <div className={styles.sect3Img}>
                                        <img className={styles.img} src='https://t4.ftcdn.net/jpg/05/12/64/51/360_F_512645152_VJUHBFUzLXp0qApk5qf08m6CNmb49c3O.jpg' />
                                    </div>
                                    <div className={styles.sect3Img}>
                                        <img className={styles.img} src='https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc8910000/iguazu-falls-stock.jpg?update-time=1677089883729&size=responsive640' />
                                    </div>
                                </div>
                                
                            </div>
                            <div className={styles.squareImg}>
                                <img className={styles.img} src='https://media.macphun.com/img/uploads/customer/blog/504/15360610675b8e6e8b52bd36.49629027.jpg?q=85&w=1680' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.forthSection}>
                        <div className={`${styles.sect4img1} ${quadImgOpacity == 1 && styles.opacity1}`}>
                            <img className={styles.img} src='https://png.pngtree.com/background/20230512/original/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-picture-image_2503007.jpg'/>
                        </div>
                        <div className={`${styles.sect4img2} ${quadImgOpacity == 2 && styles.opacity1}`}>
                            <img className={styles.img} src='https://www.usnews.com/object/image/00000162-f3bb-d0d5-a57f-fbfb3eef0000/32-lake-louise.jpg?update-time=1677094961403&size=responsive640'/>
                        </div>
                        <div className={`${styles.sect4img3} ${quadImgOpacity == 3 && styles.opacity1}`}>
                            <img className={styles.img} src='https://www.myglobalviewpoint.com/wp-content/uploads/2023/08/Most-Beautiful-Places-in-Greece-Featured-Image.jpg'/>
                        </div>
                        <div className={`${styles.sect4img4} ${quadImgOpacity == 4 && styles.opacity1}`}>
                            <img className={styles.img} src='https://static.vecteezy.com/system/resources/previews/032/259/695/non_2x/beautiful-peacock-in-the-water-flowers-house-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg'/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}