import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="h-full">
      <Head>
        <title>Formik</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="h-full">
        <div className="flex flex-col items-center mt-6 relative h-full">
          <h1 className="relative font-logo text-black text-4xl mb-20">
            Formik
            <div className="w-12 h-3 bg-yellow absolute bottom-1 right-[-0.5rem] z-[-1]"/>
          </h1>
          <div className="bg-pink w-8 h-8 absolute right-12 top-0 rounded-full" />
          <div className="w-11/12 flex justify-center">
            <Component {...pageProps} /> 
          </div>
          <div className="h-44 bg-[#5E5D86] mt-20 w-full">
            <h1 className="font-logo text-white text-4xl mb-9 float-right mr-3 mt-20">Formik</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyApp;