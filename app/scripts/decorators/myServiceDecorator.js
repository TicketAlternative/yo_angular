'use strict';

angular.module('sampleAngularAppApp')
    .config(function ($provide) {
        $provide.decorator('myService', function ($delegate) {
            // decorate the $delegate
            return $delegate;
        });
    });
