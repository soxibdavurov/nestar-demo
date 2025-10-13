import "@/styles/globals.css";
import type { AppProps } from "next/app";
console.log("APP DOCUMENT PAGES ROUTER");
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
