import styles from './styles.module.css';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TeachingDocument() {
    const [showNavigation, setShowNavigation] = useState(false);
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
                <Image onClick={()=>setShowNavigation(true)} style={{objectFit:'cover', marginLeft: '20px'}} width={20} height={40} src={'/gameImg/Mega menu.png'} />
            </div>
            <div className={styles.mainContent}>
                
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