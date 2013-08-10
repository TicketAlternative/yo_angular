'use strict';

angular.module('sampleAngularAppApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sampleroute', {
        templateUrl: 'views/sampleroute.html',
        controller: 'SamplerouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
