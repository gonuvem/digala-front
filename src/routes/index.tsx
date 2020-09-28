import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import MyResearches from '../pages/MyResearches';
import SurveyBuilder from '../pages/SurveyBuilder';
import ShareSurvey from '../pages/ShareSurvey';
import SurveyResults from '../pages/SurveyResults';
import Survey from '../pages/Survey';

const Routes: React.FC = () => (
  <Switch>
    <ProtectedRoute path="/" exact component={SignIn} />
    <ProtectedRoute path="/forgot" component={Forgot} />
    <ProtectedRoute path="/my_surveys" isPrivate component={MyResearches} />
    <ProtectedRoute
      path="/edit_survey/:id"
      isPrivate
      component={SurveyBuilder}
    />
    <ProtectedRoute path="/share/:id" isPrivate component={ShareSurvey} />
    <ProtectedRoute
      path="/survey_results/:id"
      isPrivate
      component={SurveyResults}
    />

    <Route path="/survey/:id" component={Survey} />
  </Switch>
);

export default Routes;
