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
        vm.categBtn = _categBtn;

        function _init() {
            
           
        }
        function _helpBtn(type) {
            if (type == 'me') {
               vm.showBtn = true;
            } else {
               $window.location.href = "/Home/Report";
            }
        }
        function _categBtn(value) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 90);
            if ($cookies.get(value) != null) {
                var num = $cookies.get(value);
                num++;
                $cookies.put(value, num, { 'expires': expireDate });
            } else {
                $cookies.put(value, 1, { 'expires': expireDate });
            }
            if (value == "suicide") $window.location.href = "/Home/SuiResource";
            if (value == "sexual_assault") $window.location.href = "/Home/SAResources";
            if (value == "domestic_violence") $window.location.href = "/Home/";
        }
    }
})();