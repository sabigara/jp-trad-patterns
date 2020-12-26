import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { init } from '@socialgouv/matomo-next';

import '@/styles/global.scss';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

if (MATOMO_URL == null || MATOMO_SITE_ID == null) {
  throw new Error('Matomo tracking url or site id is not configured.');
}

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <>
      <Head>
        <title>JP Trad Patterns</title>
        <meta
          name="description"
          content="Generate your website's background with traditional Japanese patterns."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
