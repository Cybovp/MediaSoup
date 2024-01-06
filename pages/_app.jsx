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

function MyApp({ Component, pageProps }) {
  return (
    <>
			<Head>
					<title>Chat365</title>
					<link rel='icon' href='/icon_365.png' />
			</Head>
					<Script
						src='https://kit.fontawesome.com/41f7b0205e.js'
						crossorigin='anonymous'></Script>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
