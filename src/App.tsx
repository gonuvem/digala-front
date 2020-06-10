import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import GlobalStyles from './styles/global';

import ApolloClient from './services/apoloClient';
import Layout from './layout';
import Header from './components/Common/Header';

import Routes from './routes';

import Sort from './components/ResearchFields/SortAnswers';

const App: React.FC = () => (
  // <BrowserRouter>
  //   <ApolloProvider client={ApolloClient}>
  //     <Header />
  //     <Layout>
  //       <Routes />
  //     </Layout>
  //     <GlobalStyles />
  //   </ApolloProvider>
  //   <ToastContainer />
  // </BrowserRouter>
  <Sort label="sdfsd" />
);

export default App;
