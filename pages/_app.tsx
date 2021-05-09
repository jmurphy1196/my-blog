import { store } from "../redux/store";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import client from "../graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";
import "../styles/main.scss";
import "highlight.js/styles/dracula.css";

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </Provider>
  );
};

export default WrappedApp;
