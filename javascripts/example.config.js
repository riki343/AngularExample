(function (angular) {
    angular.module('example').config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                'url': '/home',
                'templateUrl': '/javascripts/View/home.html'
            })
        ;

        $urlRouterProvider.otherwise('/home');
    }
})(angular);