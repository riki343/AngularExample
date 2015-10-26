(function (angular) {
    angular.module('example').directive('exampleList', Directive);

    Directive.$inject = [];

    function Directive() {
        return {
            'templateUrl': '/javascripts/Directive/Template/list.html',
            'restrict': 'E',
            'link': Link,
            'scope': {
                'items': '=items',
                'textColor': '@textColor',
                'itemColor': '@itemColor',
                'maxHeight': '@maxHeight'
            }
        };

        function Link($scope, $element, $attrs) {
            $scope.styles = {
                'max-height': $scope.maxHeight,
                'overflow-y': 'scroll'
            };

            $scope.itemStyles = {
                'color': $scope.textColor,
                'background-color': $scope.itemColor,
                'padding': '5px',
                'margin': '5px'
            };

            // Watchers
            $scope.$watch('items', function (newVal, oldVal) {
                $scope.styles.items = newVal;
            });

            $scope.$watch('textColor', function (newValue, oldValue) {
                $scope.itemStyles['color'] = newValue;
            });

            $scope.$watch('itemColor', function (newValue, oldValue) {
                $scope.itemStyles['background-color'] = newValue;
            });

            $scope.$watch('maxHeight', function (newValue, oldValue) {
                $scope.styles['max-height'] = newValue;
            });
        }
    }
})(angular);