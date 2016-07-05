import angular from 'angular';

import './app.css';
import template from './app.html';

const appDirective = () => {
  return {
    template: template,
    controller: 'AppCtrl',
    controllerAs: 'app',
    scope: {
      title: '=title'
    },
    restrict: 'E'
  }
}

class AppController {
  /*@ngInject*/
  constructor($scope) {
    console.log($scope);
    this.url = Array.apply(null, {length: 10}).map(Number.call, Number).slice(1);
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', appDirective)
  .controller('AppCtrl', AppController);

export default MODULE_NAME;
