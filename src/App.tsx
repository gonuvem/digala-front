import React from 'react';

import GlobalStyles from './styles/global';

import Layout from './layout';
import Header from './components/Header';

// import SurveyBuilder from './pages/SurveyBuilder';
import MyResearches from './pages/MyResearches';

const App: React.FC = () => (
  <>
    <Header />
    <Layout>
      {/* <SurveyBuilder /> */}
      <MyResearches />
    </Layout>
    <GlobalStyles />
  </>
);

export default App;
