import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((component) => component)

  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}
