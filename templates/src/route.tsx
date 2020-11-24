import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Index from '@/pages/Index';

import About from '@/pages/About';

import ErrorBoundary from './ErrorBoundary';

const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    component: Index
  }
];

function RouteWithSubRoutes(route: any): JSX.Element {
  return (
    <Route
      path={route.path}
      render={(props: any): JSX.Element => {
        return <route.component {...props} />;
      }}
    />
  );
}

const RouteConfig = (): JSX.Element => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          {routes.map((route: any, i: number) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default RouteConfig;
