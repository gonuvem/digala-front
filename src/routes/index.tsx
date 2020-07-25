import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import MyResearches from '../pages/MyResearches';
import SurveyBuilder from '../pages/SurveyBuilder';
import ShareSurvey from '../pages/ShareSurvey';
import Research from '../pages/Research';

const Routes: React.FC = () => (
  <Switch>
    <ProtectedRoute path="/" exact component={SignIn} />
    <ProtectedRoute path="/forgot" component={Forgot} />
    <ProtectedRoute path="/my_researches" isPrivate component={MyResearches} />
    <ProtectedRoute
      path="/edit_survey/:id"
      isPrivate
      component={SurveyBuilder}
    />
    <ProtectedRoute path="/share" isPrivate component={ShareSurvey} />

    <Route path="/research/:id" component={Research} />
  </Switch>
);

export default Routes;
