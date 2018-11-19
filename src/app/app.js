import './app.scss';

export const AppComponent = {
  template: require('./app.html'),

  controller: class App {
    $onInit() {
      this.data = require('../data.json');
      this.answers = [];
    }
  }
};
