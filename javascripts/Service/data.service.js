(function (angular) {
    angular.module('example').factory('dataService', Service);

    Service.$inject = ['$rootScope'];

    function Service($rootScope) {
        var self = this;
        this.data = [
            'some1', 'some2', 'some3',
            'some4', 'some5', 'some6',
            'some7', 'some8', 'some9'
        ];

        var factory = {
            'addData': function(data) {
                //self.data.push(data);
                $rootScope.$broadcast('DataAdded', data);
            },
            'getData': function() {
                return self.data;
            }
        };

        return factory;
    }
})(angular);