import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';
import {AppComponent} from './app/app';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', AppComponent);
