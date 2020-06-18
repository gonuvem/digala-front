import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import MyResearches from '../pages/MyResearches';
import SurveyBuilder from '../pages/SurveyBuilder';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/my_researches" isPrivate component={MyResearches} />
    <Route path="/edit_survey/:id" isPrivate component={SurveyBuilder} />
  </Switch>
);

export default Routes;
