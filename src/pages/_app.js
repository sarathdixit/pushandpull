import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const helvetica = localFont({
  src: [
    {
      path: "./../../public/assets/fonts/Helvetica-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/assets/fonts/Helvetica-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/assets/fonts/Helvetica.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/assets/fonts/Helvetica-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "./../../public/assets/fonts/HelveticaNeue-UltraLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/assets/fonts/HelveticaNeue-Light.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${bebas.variable} ${helvetica.variable} ${helveticaNeue.variable}`}
    >
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KVWS3LDT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Component {...pageProps} />
    </main>
  );
}
