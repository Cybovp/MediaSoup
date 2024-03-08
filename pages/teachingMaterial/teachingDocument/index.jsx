import styles from './styles.module.css';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const listSubject = [
    {
        id: 0,
        type: 'subject',
        name: 'Tiếng Việt'
    },
    {
        id: 1,
        type: 'subject',
        name: 'Toán'
    },
    {
        id: 2,
        type: 'subject',
        name: 'Đạo đức'
    },
    {
        id: 3,
        type: 'subject',
        name: 'Khoa học'
    },
    {
        id: 4,
        type: 'subject',
        name: 'Lịch sử và Địa lý'
    },
    {
        id: 5,
        type: 'subject',
        name: 'Âm nhạc'
    },
    {
        id: 6,
        type: 'subject',
        name: 'Mỹ thuật'
    },
    {
        id: 7,
        type: 'subject',
        name: 'Kĩ thuật'
    },
    {
        id: 8,
        type: 'subject',
        name: 'Tiếng Anh'
    },
    {
        id: 9,
        type: 'subject',
        name: 'Tin học'
    },
    {
        id: 10,
        type: 'subject',
        name: 'Tất cả'
    }
]
const listGrade = [
    {
        id: 0,
        type: 'grade',
        name: 'Lớp 1'
    },
    {
        id: 1,
        type: 'grade',
        name: 'Lớp 2'
    },
    {
        id: 2,
        type: 'grade',
        name: 'Lớp 3'
    },
    {
        id: 3,
        type: 'grade',
        name: 'Lớp 4'
    },
    {
        id: 4,
        type: 'grade',
        name: 'Lớp 5'
    },
]
const documents = [
    {
        id: 0,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 1',
        des: 'This is a ducument',
        subject: 0,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 1,
        name: 'Tài liệu giảng dạy môn Toán lớp 1',
        des: 'This is a ducument',
        subject: 1,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 2,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 1',
        des: 'This is a ducument',
        subject: 2,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 3,
        name: 'Tài liệu giảng dạy môn Khoa học lớp 1',
        des: 'This is a ducument',
        subject: 3,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 4,
        name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 1',
        des: 'This is a ducument',
        subject: 4,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 5,
        name: 'Tài liệu giảng dạy môn Âm nhạc lớp 1',
        des: 'This is a ducument',
        subject: 5,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 6,
        name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 1',
        des: 'This is a ducument',
        subject: 6,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 7,
        name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 1',
        des: 'This is a ducument',
        subject: 7,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 8,
        name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 1',
        des: 'This is a ducument',
        subject: 8,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 9,
        name: 'Tài liệu giảng dạy môn Tin h lớp 1',
        des: 'This is a ducument',
        subject: 9,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 10,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 2',
        des: 'This is a ducument',
        subject: 0,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 11,
        name: 'Tài liệu giảng dạy môn Toán lớp 2',
        des: 'This is a ducument',
        subject: 1,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 12,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 2',
        des: 'This is a ducument',
        subject: 2,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 13,
        name: 'Tài liệu giảng dạy môn Khoa học lớp 2',
        des: 'This is a ducument',
        subject: 3,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 14,
        name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 2',
        des: 'This is a ducument',
        subject: 4,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 15,
        name: 'Tài liệu giảng dạy môn Âm nhạc lớp 2',
        des: 'This is a ducument',
        subject: 5,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 16,
        name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 2',
        des: 'This is a ducument',
        subject: 6,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 17,
        name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 2',
        des: 'This is a ducument',
        subject: 7,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 18,
        name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 2',
        des: 'This is a ducument',
        subject: 8,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 19,
        name: 'Tài liệu giảng dạy môn Tin h lớp 2',
        des: 'This is a ducument',
        subject: 9,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 20,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 3',
        des: 'This is a ducument',
        subject: 0,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 21,
        name: 'Tài liệu giảng dạy môn Toán lớp 3',
        des: 'This is a ducument',
        subject: 1,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 22,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 3',
        des: 'This is a ducument',
        subject: 2,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 23,
        name: 'Tài liệu giảng dạy môn Khoa học lớp 3',
        des: 'This is a ducument',
        subject: 3,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 24,
        name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 3',
        des: 'This is a ducument',
        subject: 4,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 25,
        name: 'Tài liệu giảng dạy môn Âm nhạc lớp 3',
        des: 'This is a ducument',
        subject: 5,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 26,
        name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 3',
        des: 'This is a ducument',
        subject: 6,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 27,
        name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 3',
        des: 'This is a ducument',
        subject: 7,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 28,
        name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 3',
        des: 'This is a ducument',
        subject: 8,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 29,
        name: 'Tài liệu giảng dạy môn Tin h lớp 3',
        des: 'This is a ducument',
        subject: 9,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 30,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 4',
        des: 'This is a ducument',
        subject: 0,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 31,
        name: 'Tài liệu giảng dạy môn Toán lớp 4',
        des: 'This is a ducument',
        subject: 1,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 32,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 4',
        des: 'This is a ducument',
        subject: 2,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 33,
        name: 'Tài liệu giảng dạy môn Khoa học lớp 4',
        des: 'This is a ducument',
        subject: 3,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 34,
        name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 4',
        des: 'This is a ducument',
        subject: 4,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 35,
        name: 'Tài liệu giảng dạy môn Âm nhạc lớp 4',
        des: 'This is a ducument',
        subject: 5,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 36,
        name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 4',
        des: 'This is a ducument',
        subject: 6,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 37,
        name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 4',
        des: 'This is a ducument',
        subject: 7,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 38,
        name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 4',
        des: 'This is a ducument',
        subject: 8,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 39,
        name: 'Tài liệu giảng dạy môn Tin h lớp 4',
        des: 'This is a ducument',
        subject: 9,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 40,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 5',
        des: 'This is a ducument',
        subject: 0,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 41,
        name: 'Tài liệu giảng dạy môn Toán lớp 5',
        des: 'This is a ducument',
        subject: 1,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 42,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 5',
        des: 'This is a ducument',
        subject: 2,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 43,
        name: 'Tài liệu giảng dạy môn Khoa học lớp 5',
        des: 'This is a ducument',
        subject: 3,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 44,
        name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 5',
        des: 'This is a ducument',
        subject: 4,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 45,
        name: 'Tài liệu giảng dạy môn Âm nhạc lớp 5',
        des: 'This is a ducument',
        subject: 5,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 46,
        name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 5',
        des: 'This is a ducument',
        subject: 6,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 47,
        name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 5',
        des: 'This is a ducument',
        subject: 7,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 48,
        name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 5',
        des: 'This is a ducument',
        subject: 8,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 49,
        name: 'Tài liệu giảng dạy môn Tin h lớp 5',
        des: 'This is a ducument',
        subject: 9,
        grade: 4,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },

]
export default function TeachingDocument() {
    const [showNavigation, setShowNavigation] = useState(false);
    const [subject, setSubject] = useState(10);
    const [grade, setGrade] = useState(0);
    const [activeItem, setActiveItem] = useState(null);
    const [filterData, setFilterData] = useState({});
    const [filterDocuments, setFilterDocuments] = useState(documents)
    const search = () => {
        if(filterData.search){
            const data = documents.filter(d => d.name.includes(filterData.search))
            setFilterDocuments(data);
        }else{
            setFilterDocuments(documents);
        }
    }
    useEffect(()=>{
        if(!filterData.search){
            setFilterDocuments(documents);
        }
    },[filterData.search])
    return (
        <div className={styles.body}>
            <Header/>
            <div className={styles.mainContent}>
                <div className={styles.filterArea}>
                    <div className={styles.gameKind}>
                        <input onChange={(e)=>setFilterData((prev)=>{return {...prev,search: e.target.value}})} placeholder='Tên tài liệu' className={styles.searcGameInput}></input>
                        <div onClick={()=>search()} className={styles.searchGameButton}>
                            <span className="material-symbols-outlined">search</span>
                        </div>
                    </div>
                    <div className={styles.subjectFilter}>
                        {listSubject.map(k => (
                            <div key={k.id} onClick={()=>setSubject(k.id)} className={styles.subjectKind}>
                                {k.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.contentArea}> 
                    <div className={styles.gradeFilter}>
                        {listGrade.map(k => (
                            <div key={k.id} onClick={()=>setGrade(k.id)} className={`${styles.grade} ${k.id == grade && styles.borderBottom}`}>{k.name}</div>
                        ))}
                    </div>
                    <div className={styles.contentItems}>
                        {subject != 10 ? filterDocuments.filter(d => d.grade == grade && d.subject == subject).map(d => (
                            <div key={d.id} onMouseEnter={()=>setActiveItem(d.id)} onMouseLeave={()=>setActiveItem(null)} className={styles.document}>
                                <div className={styles.documentTitle}>{d.name}</div>
                                {activeItem == d.id && (
                                    <div className={styles.docSection}>
                                        <div className={styles.docDes}>
                                            Miêu tả: <div className={styles.gameDescription}>
                                                {d.des}
                                            </div>
                                            <div className={styles.doctext} style={{margin:'10px 0 0 0'}}>
                                                Lớp: {listGrade.find(c => c.id == d.grade)?.name}
                                            </div>
                                            <div className={styles.doctext} style={{margin:'10px 0 0 0'}}>
                                                Môn học: {listSubject.find(s => s.id == d.subject)?.name}
                                            </div>
                                            <div style={{margin:'20px 0 0 0'}} className={styles.gameDownLoad}>
                                                <a className={styles.downloadLink} href={d.link} target='_blank'>Tải về</a>
                                            </div>
                                        </div>
                                        <div className={styles.docImg}>
                                            <img src={d.img} className={styles.docImage}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )): filterDocuments.filter(d => d.grade == grade).map(d => (
                            <div key={d.id} onMouseEnter={()=>setActiveItem(d.id)} onMouseLeave={()=>setActiveItem(null)} className={styles.document}>
                                <div className={styles.documentTitle}>{d.name}</div>
                                {activeItem == d.id && (
                                    <div className={styles.docSection}>
                                        <div className={styles.docDes}>
                                            Miêu tả: <div className={styles.gameDescription}>
                                                {d.des}
                                            </div>
                                            <div className={styles.doctext} style={{margin:'10px 0 0 0'}}>
                                                Lớp: {listGrade.find(c => c.id == d.grade)?.name}
                                            </div>
                                            <div className={styles.doctext} style={{margin:'10px 0 0 0'}}>
                                                Môn học: {listSubject.find(s => s.id == d.subject)?.name}
                                            </div>
                                            <div style={{margin:'20px 0 0 0'}} className={styles.gameDownLoad}>
                                                <a className={styles.downloadLink} href={d.link} target='_blank'>Tải về</a>
                                            </div>
                                        </div>
                                        <div className={styles.docImg}>
                                            <img src={d.img} className={styles.docImage}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}