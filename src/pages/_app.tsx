import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { wrapper } from 'store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content={`width=device-width, minimum-scale=1.0, initial-scale=1.0, 
                            maximum-scale=1.0, user-scalable=no, viewport-fit=cover`}
        />
        <title>Money handler - ваш личный финансовый управляющий</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
