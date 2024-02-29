import '@/styles/global.css';
import('bootstrap/dist/css/bootstrap.min.css');
if (typeof document !== 'undefined') {
  import('bootstrap/dist/js/bootstrap.bundle.min');
  // break;
}
// import 'bootstrap/scss/_variables.scss';
import Head from 'next/head';
import Script from 'next/script';
import '@/styles/iconFlying.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-notifications/lib/notifications.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
			<Head>
					<title>Primary Teaching Material</title>
					{/* <link rel='icon' href='/icon_365.png' /> */}
					<link rel='icon' href='https://lh3.googleusercontent.com/sZCtuI5NKeq_V0sn3AxE4u8ZPabmvIpeld3HH7dYT5EWUL0OuutlqK15gZ8ml6hyKLfuC-pPDsLINltHJi5V8FlDBqUgLpf3fQ=w57-rw' /> 
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
			</Head>
					<Script
						src='https://kit.fontawesome.com/41f7b0205e.js'
						crossorigin='anonymous'></Script>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
