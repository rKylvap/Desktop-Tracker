'use strict';

angular.module('vendor', ['ui.router', 'ui.bootstrap']);
angular.
    module('ngApp', ['vendor']).
    constant('ngConstants', {
        remoteServer: require('./bin/config').remoteServer
    });