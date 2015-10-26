(function (angular) {
    angular.module('example').controller('listController', Controller);

    Controller.$inject = [
        '$scope', 'dataService'
    ];

    function Controller($scope, data) {
        var self = this;
        this.items = data.getData();

        $scope.$on('DataAdded', function (event, data) {
            self.items.unshift(data);
        });
    }
})(angular);