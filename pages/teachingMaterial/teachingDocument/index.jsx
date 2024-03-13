import styles from './styles.module.css';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Carousel } from 'react-responsive-carousel';

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
        name: 'Tự nhiên và Xã hội'
    },
    // {
    //     id: 4,
    //     type: 'subject',
    //     name: 'Lịch sử và Địa lý'
    // },
    // {
    //     id: 5,
    //     type: 'subject',
    //     name: 'Âm nhạc'
    // },
    // {
    //     id: 6,
    //     type: 'subject',
    //     name: 'Mỹ thuật'
    // },
    // {
    //     id: 7,
    //     type: 'subject',
    //     name: 'Kĩ thuật'
    // },
    // {
    //     id: 8,
    //     type: 'subject',
    //     name: 'Tiếng Anh'
    // },
    // {
    //     id: 9,
    //     type: 'subject',
    //     name: 'Tin học'
    // },
    {
        id: 11,
        type: 'subject',
        name: 'Hoạt động trải nghiệm'
    },
    {
        id: 10,
        type: 'subject',
        name: 'Tất cả'
    },
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
    // {
    //     id: 2,
    //     type: 'grade',
    //     name: 'Lớp 3'
    // },
    // {
    //     id: 3,
    //     type: 'grade',
    //     name: 'Lớp 4'
    // },
    // {
    //     id: 4,
    //     type: 'grade',
    //     name: 'Lớp 5'
    // },
]
const documents = [
    {
        id: 0,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 1',
        des: 'This is a ducument',
        subject: 0,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade1/caTimDan.png',
                link:'https://drive.google.com/file/d/14ptE4looMgGy1dtICJd_BQUAoUoGxZ3h/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/bangChuCai.png',
                link:'https://drive.google.com/file/d/1bsJ83ywKNSOpSQuTd4Njq9ThGy3cgSWi/view?usp=sharing'
            }
        ]
    },
    {
        id: 1,
        name: 'Tài liệu giảng dạy môn Toán lớp 1',
        des: 'This is a ducument',
        subject: 1,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade1/baiCaSo.png',
                link:'https://drive.google.com/file/d/1ZJfUpcVjKavzbCT0iqk2g_d2JTDlExv_/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/xemDongHo.png',
                link:'https://drive.google.com/file/d/1_q0Od3jaNf4z91P5inY6gtrY5XhdCB5R/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/so.png',
                link:'https://drive.google.com/file/d/1XA7jG6WsnWbWQ5R7vxV9GMMK3izQngwo/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/dau.png',
                link:'https://drive.google.com/file/d/1R_cR8VvwOtlsbOdX_PXGykYF4HPlpFVn/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/phieuBaiTapToan.png',
                link:'https://drive.google.com/file/d/1ggdcneYC9t1o1Nv1ripytI9hfdthYj3P/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/hinhHocPhang.png',
                link:'https://docs.google.com/presentation/d/17ntmVT46OQPAEBTXIU9gpdbWP6q8Fclz/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true'
            },
            {
                img:'/documentImg/grade1/ktraCK1.png',
                link:'https://drive.google.com/file/d/14MbhF11mny5yLIOVo9lFa25zClfmTc71/view?usp=sharing'
            },
        ]
    },
    {
        id: 2,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 1',
        des: 'This is a ducument',
        subject: 2,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade1/daoDuc1.png',
                link:'https://drive.google.com/file/d/1d8GgpZKqnlxAYk32wfugqZbuoMvgawZV/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/daoDuc2.png',
                link:'https://drive.google.com/file/d/1-3UtSJ2AIcUix8NCd9i80wCZZTm4d2PU/view?usp=sharing'
            }
        ]
    },
    {
        id: 3,
        name: 'Tài liệu giảng dạy môn Tự nhiên và Xã hội lớp 1',
        des: 'This is a ducument',
        subject: 3,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade1/phieuHocTapTNXH.png',
                link:'https://drive.google.com/file/d/1c7s5lv2f3nQiJsO-YTh4hrPY1tf7tUpY/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/phieuBaiTapTNXH.png',
                link:'https://drive.google.com/file/d/1K5BFvSZt-8AodP-28eJ6W-jBzP_nJxCq/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/doChoiDanGian.png',
                link:'https://drive.google.com/file/d/1aqkE9thkU2fyX2kVNem_sy2S-kjTWhle/view?usp=sharing'
            },
            {
                img:'/documentImg/grade1/boPhanCay.png',
                link:'https://drive.google.com/file/d/1iekkl_0vpubkp7kVXoNSdV_mkE7tJubj/view?usp=sharing'
            }
        ]
    },
    // {
    //     id: 4,
    //     name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 1',
    //     des: 'This is a ducument',
    //     subject: 4,
    //     grade: 0,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 5,
    //     name: 'Tài liệu giảng dạy môn Âm nhạc lớp 1',
    //     des: 'This is a ducument',
    //     subject: 5,
    //     grade: 0,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 6,
    //     name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 1',
    //     des: 'This is a ducument',
    //     subject: 6,
    //     grade: 0,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 7,
    //     name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 1',
    //     des: 'This is a ducument',
    //     subject: 7,
    //     grade: 0,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 8,
    //     name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 1',
    //     des: 'This is a ducument',
    //     subject: 8,
    //     grade: 0,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 9,
    //     name: 'Tài liệu giảng dạy môn Tin học lớp 1',
    //     des: 'This is a ducument',
    //     subject: 9,
    //     grade: 0,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    {
        id: 10,
        name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 2',
        des: 'This is a ducument',
        subject: 0,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade2/doDungHocTap.png',
                link:'https://drive.google.com/file/d/1ndSf-H-8V4wpLvnhF246h5Gh0VxYUHGL/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/gk1.png',
                link:'https://docs.google.com/presentation/d/1xFHpZQitNxqY0qVuTspnQmAJ55ZTdPtN/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true'
            },
            {
                img:'/documentImg/grade2/gk2.png',
                link:'https://docs.google.com/presentation/d/1iAByzq0R9krpzC9B561dMnS7UcK25CXv/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true'
            },
        ]
    },
    {
        id: 11,
        name: 'Tài liệu giảng dạy môn Toán lớp 2',
        des: 'This is a ducument',
        subject: 1,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade2/btapCuoiTuan.png',
                link:'https://drive.google.com/file/d/1MXe61pJnrx2-_oc-bKUHZO6c4HAgc46K/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/btapTuan.png',
                link:'https://drive.google.com/file/d/1Np4LVrru-Z_4FmzNxbCSpUOFSTJgCjnC/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/gkToan1.png',
                link:'https://docs.google.com/presentation/d/1hIH-OgyWTDvYshzFjkefUNuUAWh6R-1-/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true'
            },
        ]
    },
    {
        id: 12,
        name: 'Tài liệu giảng dạy môn Đạo đức lớp 2',
        des: 'This is a ducument',
        subject: 2,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade2/daoDuc3.png',
                link:'https://drive.google.com/file/d/1B2C0_Q7_iMKLd0F7AKNoRexgummiWYhe/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/daoDuc4.png',
                link:'https://drive.google.com/file/d/1-v720NZA474SIBV8eLKaOaFn0i1gLxot/view?usp=sharing'
            }
        ]
    },
    {
        id: 13,
        name: 'Tài liệu giảng dạy môn Tự nhiên và Xã hội lớp 2',
        des: 'This is a ducument',
        subject: 3,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1',
        docs: [
            {
                img:'/documentImg/grade2/heTieuHoa.png',
                link:'https://drive.google.com/file/d/1ZRBbcKmBSNWQWtKol1n8djQP_ehml9Jt/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/coTheEm.png',
                link:'https://docs.google.com/presentation/d/1K1eQguzsJ0nZfIw2DNR2MusgQpxNHcOL/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true'
            },
            {
                img:'/documentImg/grade2/ruaTay.png',
                link:'https://docs.google.com/presentation/d/1Og8pdg6sVHytJ9ZZRpffcosx2EDnDDKC/edit?usp=sharing&ouid=105162719495193298319&rtpof=true&sd=true'
            },
            {
                img:'/documentImg/grade2/nguyHiem.png',
                link:'https://drive.google.com/file/d/16RJ4PAFtHzd3teqT0CW_b2X6Ebf2oObT/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/nguyHiem2.png',
                link:'https://drive.google.com/file/d/1WFDnlY1TYn9ykwov99C8QWd3wjKfXZGE/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/nguyHiem3.png',
                link:'https://drive.google.com/file/d/1Svr5Ieh0UhBMpnH744lH7BxbJzU-MrNo/view?usp=sharing'
            },
            {
                img:'/documentImg/grade2/nguyHiem4.png',
                link:'https://drive.google.com/file/d/1MDBdxNLqlnD8f50xtoJd3bVzpWfmBqRk/view?usp=sharing'
            },
        ]
    },
    // {
    //     id: 14,
    //     name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 2',
    //     des: 'This is a ducument',
    //     subject: 4,
    //     grade: 1,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 15,
    //     name: 'Tài liệu giảng dạy môn Âm nhạc lớp 2',
    //     des: 'This is a ducument',
    //     subject: 5,
    //     grade: 1,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 16,
    //     name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 2',
    //     des: 'This is a ducument',
    //     subject: 6,
    //     grade: 1,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 17,
    //     name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 2',
    //     des: 'This is a ducument',
    //     subject: 7,
    //     grade: 1,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 18,
    //     name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 2',
    //     des: 'This is a ducument',
    //     subject: 8,
    //     grade: 1,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 19,
    //     name: 'Tài liệu giảng dạy môn Tin học lớp 2',
    //     des: 'This is a ducument',
    //     subject: 9,
    //     grade: 1,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 20,
    //     name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 3',
    //     des: 'This is a ducument',
    //     subject: 0,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 21,
    //     name: 'Tài liệu giảng dạy môn Toán lớp 3',
    //     des: 'This is a ducument',
    //     subject: 1,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 22,
    //     name: 'Tài liệu giảng dạy môn Đạo đức lớp 3',
    //     des: 'This is a ducument',
    //     subject: 2,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 23,
    //     name: 'Tài liệu giảng dạy môn Tự nhiên và Xã hội lớp 3',
    //     des: 'This is a ducument',
    //     subject: 3,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 24,
    //     name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 3',
    //     des: 'This is a ducument',
    //     subject: 4,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 25,
    //     name: 'Tài liệu giảng dạy môn Âm nhạc lớp 3',
    //     des: 'This is a ducument',
    //     subject: 5,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 26,
    //     name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 3',
    //     des: 'This is a ducument',
    //     subject: 6,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 27,
    //     name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 3',
    //     des: 'This is a ducument',
    //     subject: 7,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 28,
    //     name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 3',
    //     des: 'This is a ducument',
    //     subject: 8,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 29,
    //     name: 'Tài liệu giảng dạy môn Tin học lớp 3',
    //     des: 'This is a ducument',
    //     subject: 9,
    //     grade: 2,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 30,
    //     name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 4',
    //     des: 'This is a ducument',
    //     subject: 0,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 31,
    //     name: 'Tài liệu giảng dạy môn Toán lớp 4',
    //     des: 'This is a ducument',
    //     subject: 1,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 32,
    //     name: 'Tài liệu giảng dạy môn Đạo đức lớp 4',
    //     des: 'This is a ducument',
    //     subject: 2,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 33,
    //     name: 'Tài liệu giảng dạy môn Tự nhiên và Xã hội lớp 4',
    //     des: 'This is a ducument',
    //     subject: 3,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 34,
    //     name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 4',
    //     des: 'This is a ducument',
    //     subject: 4,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 35,
    //     name: 'Tài liệu giảng dạy môn Âm nhạc lớp 4',
    //     des: 'This is a ducument',
    //     subject: 5,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 36,
    //     name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 4',
    //     des: 'This is a ducument',
    //     subject: 6,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 37,
    //     name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 4',
    //     des: 'This is a ducument',
    //     subject: 7,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 38,
    //     name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 4',
    //     des: 'This is a ducument',
    //     subject: 8,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 39,
    //     name: 'Tài liệu giảng dạy môn Tin học lớp 4',
    //     des: 'This is a ducument',
    //     subject: 9,
    //     grade: 3,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 40,
    //     name: 'Tài liệu giảng dạy môn Tiếng Việt lớp 5',
    //     des: 'This is a ducument',
    //     subject: 0,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 41,
    //     name: 'Tài liệu giảng dạy môn Toán lớp 5',
    //     des: 'This is a ducument',
    //     subject: 1,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 42,
    //     name: 'Tài liệu giảng dạy môn Đạo đức lớp 5',
    //     des: 'This is a ducument',
    //     subject: 2,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 43,
    //     name: 'Tài liệu giảng dạy môn Tự nhiên và Xã hội lớp 5',
    //     des: 'This is a ducument',
    //     subject: 3,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 44,
    //     name: 'Tài liệu giảng dạy môn Lịch sử Địa lý lớp 5',
    //     des: 'This is a ducument',
    //     subject: 4,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 45,
    //     name: 'Tài liệu giảng dạy môn Âm nhạc lớp 5',
    //     des: 'This is a ducument',
    //     subject: 5,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 46,
    //     name: 'Tài liệu giảng dạy môn Mỹ thuật lớp 5',
    //     des: 'This is a ducument',
    //     subject: 6,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 47,
    //     name: 'Tài liệu giảng dạy môn Kĩ thuật lớp 5',
    //     des: 'This is a ducument',
    //     subject: 7,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 48,
    //     name: 'Tài liệu giảng dạy môn Tiếng Anh lớp 5',
    //     des: 'This is a ducument',
    //     subject: 8,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    // {
    //     id: 49,
    //     name: 'Tài liệu giảng dạy môn Tin học lớp 5',
    //     des: 'This is a ducument',
    //     subject: 9,
    //     grade: 4,
    //     img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    // },
    {
        id: 50,
        name: 'Tài liệu giảng dạy môn Hoạt động trải nghiệm lớp 1',
        des: 'This is a ducument',
        subject: 11,
        grade: 0,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 51,
        name: 'Tài liệu giảng dạy môn Hoạt động trải nghiệm lớp 2',
        des: 'This is a ducument',
        subject: 11,
        grade: 1,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 52,
        name: 'Tài liệu giảng dạy môn Hoạt động trải nghiệm lớp 3',
        des: 'This is a ducument',
        subject: 11,
        grade: 2,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 53,
        name: 'Tài liệu giảng dạy môn Hoạt động trải nghiệm lớp 4',
        des: 'This is a ducument',
        subject: 11,
        grade: 3,
        img: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
    },
    {
        id: 54,
        name: 'Tài liệu giảng dạy môn Hoạt động trải nghiệm lớp 5',
        des: 'This is a ducument',
        subject: 11,
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
    const [filterDocuments, setFilterDocuments] = useState(documents);
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
    useEffect(()=>{

    })
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
                        {grade != 0 ? listSubject.map(k => (
                            <div key={k.id} onClick={()=>setSubject(k.id)} className={styles.subjectKind}>
                                {k.name}
                            </div>
                        )): listSubject.filter(k => k.id != 4).map(k => (
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
                                            {/* <div style={{margin:'20px 0 0 0'}} className={styles.gameDownLoad}>
                                                <a className={styles.downloadLink} href={d.link} target='_blank'>Tải về</a>
                                            </div> */}
                                            <div className={styles.doctext} style={{margin:'10px 0 0 0'}}>
                                                Tổng số tài liệu: {d.docs?.length}
                                            </div>
                                        </div>
                                        <div className={styles.docImg}>
                                            <Carousel
                                                showArrows={true} // Enable navigation arrows
                                                showThumbs={false} // Disable thumbnails (optional)
                                                infiniteLoop={true} // Enable continuous looping
                                                autoPlay={true} // Enable automatic play
                                                interval={2000} // Adjust interval as needed (in milliseconds)
                                                >
                                                {d.docs.map((slide, index) => (
                                                    <div key={index} className="slide">
                                                        <img style={{width: '100%', height: '400px', objectFit: 'cover'}} src={slide.img} alt={slide.altText} />
                                                        <div style={{width:'100%',display:'flex',justifyContent:'center',marginBottom:'40px'}}>
                                                            <div style={{margin:'20px 0 0 0'}} className={styles.gameDownLoad}>
                                                                <a className={styles.downloadLink} href={slide.link} target='_blank'>Tải về</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Carousel>
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
                                            {/* <div style={{margin:'20px 0 0 0'}} className={styles.gameDownLoad}>
                                                <a className={styles.downloadLink} href={d.link} target='_blank'>Tải về</a>
                                            </div> */}
                                            <div className={styles.doctext} style={{margin:'10px 0 0 0'}}>
                                                Tổng số tài liệu: {d.docs?.length}
                                            </div>
                                        </div>
                                        <div className={styles.docImg}>
                                            <Carousel
                                                showArrows={true} // Enable navigation arrows
                                                showThumbs={false} // Disable thumbnails (optional)
                                                infiniteLoop={true} // Enable continuous looping
                                                autoPlay={true} // Enable automatic play
                                                interval={3000} // Adjust interval as needed (in milliseconds)
                                                >
                                                {d?.docs?.map((slide, index) => (
                                                    <div key={index} className="slide">
                                                        <img style={{width: '100%', height: '400px', objectFit: 'contain'}} src={slide.img} alt={slide.altText} />
                                                        <div style={{width:'100%',display:'flex',justifyContent:'center',marginBottom:'40px'}}>
                                                            <div style={{margin:'20px 0 0 0'}} className={styles.gameDownLoad}>
                                                                <a className={styles.downloadLink} href={slide.link} target='_blank'>Tải về</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Carousel>
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