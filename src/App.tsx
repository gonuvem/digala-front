import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyles from './styles/global';

import ApolloClient from './services/apoloClient';
import Layout from './layout';
import Header from './components/Common/Header';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <ApolloProvider client={ApolloClient}>
      <Header />
      <Layout>
        <Routes />
      </Layout>
      <GlobalStyles />
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
