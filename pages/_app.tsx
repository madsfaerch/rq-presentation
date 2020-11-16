import "../styles/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Navigation } from "../components/navigation";
import { ReactQueryConfigProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Query</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactQueryConfigProvider
        config={{ queries: { staleTime: 0, cacheTime: 0 } }}
      >
        <div className="min-h-screen flex text-gray-900">
          <div className="container min-h-full max-w-5xl mx-auto p-4 flex flex-col items-start">
            <header className="border-l-4 border-purple-500 px-3 mb-10 w-full flex items-center">
              <h1 className="text-2xl font-bold">react-query</h1>
            </header>
            <Component {...pageProps} />
            <Navigation />
          </div>
        </div>
      </ReactQueryConfigProvider>
    </>
  );
}

export default MyApp;
