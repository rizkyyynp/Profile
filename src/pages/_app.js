import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rizky Nugraha Pradana</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rizky Nugraha Pradana's Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
