import 'react-hot-loader';

import 'normalize.css';

import { hot } from 'react-hot-loader/root';

import { setConfig } from 'react-hot-loader';

import ReactDOM from 'react-dom';

import Router from '@/route';

import React from 'react';

setConfig({
  logLevel: 'debug',
  reloadHooks: false
});

const app = document.getElementById('app');

const App = hot(Router);

ReactDOM.render(<App />, app);
