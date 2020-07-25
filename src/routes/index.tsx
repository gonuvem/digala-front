import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import MyResearches from '../pages/MyResearches';
import SurveyBuilder from '../pages/SurveyBuilder';
import ShareSurvey from '../pages/ShareSurvey';
import Research from '../pages/Research';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/research/:id" component={Research} />
    <Route path="/my_researches" isPrivate component={MyResearches} />
    <Route path="/edit_survey/:id" isPrivate component={SurveyBuilder} />
    <Route path="/share" isPrivate component={ShareSurvey} />
  </Switch>
);

export default Routes;
