import React from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import Editor from '@/components/Editor';

const Home: React.FC = () => (
  <div>
    <Header />
    <Editor />
  </div>
);

export default Home;
