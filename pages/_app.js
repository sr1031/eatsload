import { Global } from "@emotion/react";
import { globals } from "../styles/index/globals";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Global styles={globals} />
            <Component {...pageProps} />
        </>
    );
}

