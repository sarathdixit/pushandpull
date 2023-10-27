import "@/styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS with your desired configuration
    AOS.init({
      // Global settings here (e.g., duration, easing, etc.)
    });
  }, []);

  return <Component {...pageProps} />;
}
