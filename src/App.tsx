import React from 'react';

import GlobalStyles from './styles/global';

import Layout from './layout';
import Header from './components/Common/Header';

import MyResearches from './pages/MyResearches';

const App: React.FC = () => (
  <>
    <Header />
    <Layout>
      <MyResearches />
    </Layout>
    <GlobalStyles />
  </>
);

export default App;
