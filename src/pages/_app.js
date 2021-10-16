import "../styles/global.scss";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
