import { LaunchesProvider } from "../contexts/LaunchesContext";
import "../styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <LaunchesProvider>
      <Component {...pageProps} />
    </LaunchesProvider>
  );
}

export default MyApp;
