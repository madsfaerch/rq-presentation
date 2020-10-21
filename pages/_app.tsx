import "../styles/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Query</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex text-gray-900">
        <div className="container min-h-full mx-auto py-4 flex flex-col items-start">
          <header className="rounded-lg bg-gray-200 px-4 py-2 mb-10 w-full">
            <h1 className="text-2xl font-black">react-query spice rack</h1>
          </header>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
