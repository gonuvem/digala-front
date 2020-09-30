import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import store from './store';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyles from './styles/global';

import ApolloClient from './services/apoloClient';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ApolloProvider client={ApolloClient}>
        <AuthProvider>
          <Routes />
          <GlobalStyles />
        </AuthProvider>
      </ApolloProvider>
    </Provider>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
