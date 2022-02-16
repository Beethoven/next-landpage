import Head from "next/head";
import "styles/globals.scss";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

import SEO from "next-seo.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </>
  );
}
