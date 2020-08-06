import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import MyResearches from '../pages/MyResearches';
import SurveyBuilder from '../pages/SurveyBuilder';
import ShareSurvey from '../pages/ShareSurvey';
import Survey from '../pages/Survey';

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
    <ProtectedRoute path="/share/:id" isPrivate component={ShareSurvey} />

    <Route path="/survey/:id" component={Survey} />
  </Switch>
);

export default Routes;
