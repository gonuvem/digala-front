import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MyResearches from '../pages/MyResearches';
import SurveyBuilder from '../pages/SurveyBuilder';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={MyResearches} />
    <Route path="/new_survey" component={SurveyBuilder} />
  </Switch>
);

export default Routes;
