import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", (url, { shallow }) => {
    if (!shallow) NProgress.start();
});
Router.events.on("routeChangeComplete", (url, { shallow }) => {
    if (!shallow) NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => {
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url) => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);

    return (
        // <Loading loading={loading} />
        // {/* <Navbar/> */}
        <div id="app-root">
            <Component {...pageProps} />
        </div>
    );
}

ReactModal.setAppElement("#app-root");
