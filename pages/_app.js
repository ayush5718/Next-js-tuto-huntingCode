import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Navbar will be shown on all the pages so we will put it in _app.js file */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
