import React from 'react';

import GlobalStyles from './styles/global';

import SurveyBuilder from './pages/SurveyBuilder';

const App: React.FC = () => (
  <>
    <SurveyBuilder />
    <GlobalStyles />
  </>
);

export default App;
