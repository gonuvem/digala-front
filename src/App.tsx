import React from 'react';

import GlobalStyles from './styles/global';

import Layout from './layout';
import Header from './components/Header';

import SurveyBuilder from './pages/SurveyBuilder';

const App: React.FC = () => (
  <>
    <Header />
    <Layout>
      <SurveyBuilder />
    </Layout>
    <GlobalStyles />
  </>
);

export default App;
