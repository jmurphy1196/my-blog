import smoothscroll from "smoothscroll-polyfill";
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
      smoothscroll.polyfill();
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
