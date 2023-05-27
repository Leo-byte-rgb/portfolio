// import App from "next/app";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { HeightProvider } from "../contexts/heigths";

const App = ({ Component, pageProps }: AppProps) => (
  <HeightProvider>
    <Component {...pageProps} />
    <ToastContainer />
  </HeightProvider>
);

export default App;
