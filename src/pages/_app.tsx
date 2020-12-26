import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => (
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

export default App;
