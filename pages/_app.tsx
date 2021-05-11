import { store } from "../redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import client from "../graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";
import "../styles/main.scss";
import "highlight.js/styles/dracula.css";

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    (async () => {
      const scrollsmooth = (await import("smoothscroll-polyfill")).default;
      scrollsmooth.polyfill();
    })();
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </Provider>
  );
};

export default WrappedApp;
