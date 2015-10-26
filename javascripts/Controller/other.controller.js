(function (angular) {
    angular.module('example').controller('otherController', Controller);

    Controller.$inject = [
        '$scope', 'dataService'
    ];

    function Controller($scope, dataService) {
        var self = this;
        this.item = '';

        this.addItem = function (item) {
            dataService.addData(item);
            self.item = '';
        };
    }
})(angular);