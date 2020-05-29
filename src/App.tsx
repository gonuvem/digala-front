import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyles from './styles/global';

import ApolloClient from './services/apoloClient';
import Layout from './layout';
import Header from './components/Common/Header';

import MyResearches from './pages/MyResearches';
import SurveyBuilder from './pages/SurveyBuilder';

const App: React.FC = () => (
  <ApolloProvider client={ApolloClient}>
    <Header />
    <Layout>
      <SurveyBuilder />
    </Layout>
    <GlobalStyles />
  </ApolloProvider>
);

export default App;
