import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Pagination from '@/components/home/pagination/pagination';
import { Modal, Button } from 'react-bootstrap';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const ListGameTypes = [
    {
        id: 0,
        name: 'Game PPT Tiếng Anh',
    },
    {
        id: 1,
        name: 'Game PPT Tiếng Việt',
    },
]
const games = [
    {
        id: 0,
        type: 0,
        name: 'Class Room Object',
        des: 'Is a game',
        img: '/gameImg/classRomeObject.png',
        link: 'https://docs.google.com/presentation/d/1BicNdjAO7HtcwutuG-eMvfTvam9syvhM/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 1,
        type: 0,
        name: 'Christmas Vocalbulary',
        des: 'Is a game',
        img: '/gameImg/chrimasVocalbulary.png',
        link: 'https://docs.google.com/presentation/d/1wnmPvt-ijFMT3WCCBMIV3_xdLD21Y44Z/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 2,
        type: 0,
        name: 'Directions Driving',
        des: 'Is a game',
        img: '/gameImg/directionsDriving.png',
        link: 'https://docs.google.com/presentation/d/10Rwa6x-O9Y3OMGYpMBhCKAWkTTy2VI7_/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 3,
        type: 0,
        name: 'Simple Past Tense',
        des: 'Is a game',
        img: '/gameImg/simplePastTense.png',
        link: 'https://docs.google.com/presentation/d/1605rTThfL13lZWq45sHfVLjvu1NLc_Mu/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 4,
        type: 0,
        name: 'Discover The Animals',
        des: 'Is a game',
        img: '/gameImg/discoverTheAnimals.png',
        link: 'https://docs.google.com/presentation/d/1Hl_PBMHLa4MN-UFy7z8TuDnrc4-qE1zz/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 5,
        type: 0,
        name: 'Get Dressed',
        des: 'Is a game',
        img: '/gameImg/getDressed.png',
        link: 'https://docs.google.com/presentation/d/11GrerhRYM8ddB4_LMwLsbT8kcHjHYgEu/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 6,
        type: 0,
        name: 'Giving Directions',
        des: 'Is a game',
        img: '/gameImg/givingDirections.png',
        link: 'https://docs.google.com/presentation/d/1JmgBrFl3m0ddEmGV3IpdTEmObhs-eaF-/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 7,
        type: 0,
        name: 'Class Room Object',
        des: 'Is a game',
        img: '/gameImg/classRomeObject.png',
        link: 'https://docs.google.com/presentation/d/1BicNdjAO7HtcwutuG-eMvfTvam9syvhM/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 8,
        type: 0,
        name: 'Irregular Verb Machine',
        des: 'Is a game',
        img: '/gameImg/irregularVerbMachine.png',
        link: 'https://docs.google.com/presentation/d/1t5Z3RjE0UIYVB5fWu-FhuSCC4MQE5khi/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 9,
        type: 1,
        name: 'Ai Là Triệu Phú',
        des: 'Is a game',
        img: '/gameImg/aiLaTrieuPhu.png',
        link: 'https://docs.google.com/presentation/d/1SF_fRYk2STSo5k_Sv1yWbz8aCPAQgkqv/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 10,
        type: 1,
        name: 'Đào Vàng',
        des: 'Is a game',
        img: '/gameImg/daoVang.png',
        link: 'https://docs.google.com/presentation/d/1PUUsyYV3C-y75dQQBSYvB_ohb305ALZQ/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 11,
        type: 1,
        name: 'Giải Cứu Đại Dương',
        des: 'Is a game',
        img: '/gameImg/giaiCuuDaiDuong.png',
        link: 'https://docs.google.com/presentation/d/17cqqTxNFFOqggweDeN1lTwjKX9pBONzh/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 12,
        type: 1,
        name: 'Rung Chuông Vàng',
        des: 'Is a game',
        img: '/gameImg/rungChuongVang.png',
        link: 'https://docs.google.com/presentation/d/1jAK9Z7R8Rf11KfiZ-RLOy8unLHFd7Dld/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 13,
        type: 1,
        name: 'Vòng Quay Kì Diệu',
        des: 'Is a game',
        img: '/gameImg/vongQuayKiDieu.png',
        link: 'https://docs.google.com/presentation/d/1Wlbpsm6QITmtUCg8O3wQyu3vSLXHH67B/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 14,
        type: 1,
        name: 'Chuột Hamster',
        des: 'Is a game',
        img: '/gameImg/chuotHamster.png',
        link: 'https://docs.google.com/presentation/d/1w7yohoROp0io3Jqzp6dRpQ0krcGvHFJ0/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 15,
        type: 1,
        name: 'Cọp ơi cậu ở đâu thế',
        des: 'Is a game',
        img: '/gameImg/copOi.png',
        link: 'https://docs.google.com/presentation/d/1BHthfObBTyVRO7-b3XIMh5GiO0g1qP3n/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 16,
        type: 0,
        name: 'Modal Web',
        des: 'Is a game',
        img: '/gameImg/modalWeb.png',
        link: 'https://docs.google.com/presentation/d/1Vr2XjFEHQnrAACE3ecuHCpeuOefsVsv4/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 17,
        type: 0,
        name: 'Number Machine',
        des: 'Is a game',
        img: '/gameImg/numberMachine.png',
        link: 'https://docs.google.com/presentation/d/1VIQJE3GijQz4jImM7QAB0rO3eP0Q5Fzn/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 18,
        type: 0,
        name: 'Milionare',
        des: 'Is a game',
        img: '/gameImg/milionare.png',
        link: 'https://docs.google.com/presentation/d/1FpO27zeqXjJ9IUf6hhcQ5ozSlDqU83I0/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 19,
        type: 0,
        name: 'Prepositions Of Time',
        des: 'Is a game',
        img: '/gameImg/prepositionsOfTime.png',
        link: 'https://docs.google.com/presentation/d/1ORwd7yFVA6qjxapJoyXBwyI0QONCuwAp/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 20,
        type: 0,
        name: 'Present Simple Continuous',
        des: 'Is a game',
        img: '/gameImg/presentSimpleContinuous.png',
        link: 'https://docs.google.com/presentation/d/1uAUpAQkibDtGbkveSJl2MIfgsR2lNI4T/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 21,
        type: 0,
        name: 'Question Words',
        des: 'Is a game',
        img: '/gameImg/questionWords.png',
        link: 'https://docs.google.com/presentation/d/1ay9tc9NaJJlPNtyqZSnt7qmCXqB9POel/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 22,
        type: 0,
        name: 'Routines Quiz',
        des: 'Is a game',
        img: '/gameImg/routinesQuiz.png',
        link: 'https://docs.google.com/presentation/d/1IM0gMTryitiYCMpvuT8D9NgFGrtgBFLZ/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 23,
        type: 0,
        name: 'Routines Time',
        des: 'Is a game',
        img: '/gameImg/routinesTime.png',
        link: 'https://docs.google.com/presentation/d/1K0HKlOHsGEZc4iMFSZb_ziZzGCrSvleO/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 24,
        type: 0,
        name: 'Spot The Difference',
        des: 'Is a game',
        img: '/gameImg/spotTheDifference.png',
        link: 'https://docs.google.com/presentation/d/1GUcn7nmP-QIgOcCWYst4YEm8L1LMisFM/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 25,
        type: 0,
        name: 'Must Mustnt',
        des: 'Is a game',
        img: '/gameImg/mustMustnt.png',
        link: 'https://docs.google.com/presentation/d/1f8U5JffirkZj2u5GUHgWQai8nDPyF-j2/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 26,
        type: 0,
        name: 'Part Of The Body',
        des: 'Is a game',
        img: '/gameImg/partOfTheBody.png',
        link: 'https://docs.google.com/presentation/d/1cZvG6Sua7Jnhj69V0YF0gaKRcMdjwEKs/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 27,
        type: 0,
        name: 'Animals Guess',
        des: 'Is a game',
        img: '/gameImg/animalsGuess.png',
        link: 'https://docs.google.com/presentation/d/1sWe8kmY1_HdrBCST-jsxXLVPi_0kbbvp/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 28,
        type: 0,
        name: 'Compartives And Superlatives',
        des: 'Is a game',
        img: '/gameImg/compartivesAndSuperlatives.png',
        link: 'https://docs.google.com/presentation/d/1WBYJv3Qye77MbGf_KWSPWKs1789bWQEh/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 29,
        type: 0,
        name: 'Daily Routines',
        des: 'Is a game',
        img: '/gameImg/dailyRoutines.png',
        link: 'https://docs.google.com/presentation/d/1vFuoNC7GUmHMq1CI2dZ5B8M_60sr66LV/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 30,
        type: 0,
        name: 'Old MacDonald Farm',
        des: 'Is a game',
        img: '/gameImg/oldMacDonaldFarm.png',
        link: 'https://docs.google.com/presentation/d/15wBT7SbIdR5maxE5f2Z6NZe1HVuJHqFs/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 31,
        type: 0,
        name: 'Fast Food Wheel',
        des: 'Is a game',
        img: '/gameImg/fastFoodWheel.png',
        link: 'https://docs.google.com/presentation/d/1UWRWZJvoSZzsO7pMGoFDT_3BuzT3RhqZ/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 32,
        type: 0,
        name: 'Jeoparody',
        des: 'Is a game',
        img: '/gameImg/jeoparody.png',
        link: 'https://docs.google.com/presentation/d/1SnsIsiq-Tg829GotoW3J-3CSPps_mzTQ/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
    {
        id: 33,
        type: 0,
        name: 'Mr HowMuch Vs Mr How Many',
        des: 'Is a game',
        img: '/gameImg/mrHowMuchVsMrHowMany.png',
        link: 'https://docs.google.com/presentation/d/1ZykiUwA2vkgSHuKdsPEp6CLgdtgnGBTM/edit?usp=drive_link&ouid=105162719495193298319&rtpof=true&sd=true',
    },
]
export default function TeachingGame() {
    const [activeItem, setActiveItem] = useState(null);
    const [gameKind, setGameKind] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState(Math.ceil(games.filter(g => g.type == gameKind).length / itemsPerPage));
    const [showNavigation, setShowNavigation] = useState(false);
    const [filterData, setFilterData] = useState({});
    const [fitleredGames, setFtitleredGames] = useState(games);
    useEffect(()=>{
        setTotalPages(Math.ceil(fitleredGames.filter(g => g.type == gameKind).length / itemsPerPage));
        setFilterData((prev)=>{
            return {
                ...prev,
                type: gameKind,
            }
        })
    },[gameKind])
    useEffect(()=>{
        if(filterData?.search?.length == 0){
            setFtitleredGames(games)
        }   
    },[filterData])
    useEffect(() => {
        setCurrentPage(0);
        setTotalPages(Math.ceil(fitleredGames.filter(g => g.type == gameKind).length / itemsPerPage));
    },[fitleredGames])
    const search = () => {
        if(filterData?.search.length > 0){
            const result = games.filter(g => g.type === filterData.type && g.name.includes(filterData.search));
            setFtitleredGames(result);
        }
    }
    return (
        <div className={styles.body}>
            <Header/>
            <div className={styles.mainContent}>
                <div className={styles.filterArea}>
                    <div className={styles.gameKind}>
                        <input onChange={(e)=>setFilterData((prev)=>{return {...prev,search: e.target.value}})} placeholder='Tên trò chơi' className={styles.searcGameInput}></input>
                        <div onClick={()=>search()} className={styles.searchGameButton}>
                            <span className="material-symbols-outlined">search</span>
                        </div>
                    </div>
                    {ListGameTypes.map(k => (
                        <div onClick={()=>setGameKind(k.id)} className={styles.gameKind}>
                            {k.name}
                        </div>
                    ))}
                </div>
                <div className={styles.contentArea}>
                    {fitleredGames?.filter(g => g.type == gameKind)
                        .slice((currentPage) * itemsPerPage, (currentPage + 1) * itemsPerPage)
                        .map(g => (
                            <div onMouseEnter={()=>setActiveItem(g.id)} onMouseLeave={()=>setActiveItem(null)} className={styles.game}>
                                <Image width={360} height={300} className={styles.gameImage} src={g.img}/>
                                {activeItem == g.id && (
                                    <div className={styles.gameDes}>
                                        <div className={styles.gameTittle}>
                                            {g.name}
                                        </div>
                                        <div className={styles.gameDescription}>
                                            {g.des}
                                        </div>
                                        <div  className={styles.gameDownLoad}>
                                            <a className={styles.downloadLink} href={g.link} target='_blank'>Tải về</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                    ))}
                    <div className={styles.pagination}>
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageChange={(e)=>setCurrentPage(e.selected)}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}