import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='referrer' content='unsafe-url' />
          <script
            defer
            src='https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
