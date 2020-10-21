import "../styles/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React Query</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex">
        <div className="container min-h-full mx-auto py-4 flex flex-col">
          <h1 className="text-2xl font-black">react-query</h1>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
