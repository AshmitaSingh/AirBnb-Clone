import '../styles/globals.css';
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress";

// Loading/Progress Bar
const progress = new ProgressBar({
  size: 4,
  color: '#FE5953',
  className: 'z-50',
  delay: 100
});

// Connecting the Progress Bar with the Next.Js Router
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
