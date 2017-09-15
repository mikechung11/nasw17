//Index Controller
(function () {
    "use strict";
    angular
        .module('mainApp')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$window', '$cookies'];

    function IndexController($scope, $window, $cookies) {

        var vm = this;
        vm.$scope = $scope;
        vm.$onInit = _init;
        vm.$window = $window;
        vm.$cookies = $cookies;
        vm.helpBtn = _helpBtn;
        vm.showBtn = false;

        function _init() {
            //var socialURLval = $cookies.get('socialURL');
        }
        function _helpBtn(type) {
            if (type == 'me') {

            } else {

            }
        }
    }
})();