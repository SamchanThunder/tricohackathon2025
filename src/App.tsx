import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './scripts/routes';
import { Header } from './pages/header';

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
