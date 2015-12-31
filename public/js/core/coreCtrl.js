'use strict';

var CoreCtrl = function(ngConstants) {
    var _vm = this;

    _vm.items = ["A", "List", "Of", "Items"];

        alert(ngConstants);

    },
    _dependencies = ['ngConstants'],
    _extendedDependencies = angular.copy(_dependencies);

CoreCtrl.$inject = _dependencies;

_extendedDependencies.push(CoreCtrl);

angular.module('ngApp').controller('coreCtrl', _extendedDependencies)