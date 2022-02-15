import Head from "next/head";
import "styles/globals.scss";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

import SEO from "next-seo.config";
import Header from "@components/Header";
import Footer from "@components/Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
