import { AppProps } from "next/app";
import "../styles/main.scss";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
