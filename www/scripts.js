(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.username = 'World';

		var data = [
			{
				'order': '排行',
				'name': '专业名称',
				'level': '专业层次',
				'fans': '人气',
			}, {
				'order': '1',
				'name': '临床医学',
				'level': '专科',
				'fans': '430488',
			}, {
				'order': '2',
				'name': '商务经济学',
				'level': '本科',
				'fans': '292003',
			}	
		]	

		$scope.datas = data;
    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };

		$scope.search = function() {
			var searchValue = $scope.searchValue;
			console.log(searchValue);
		}
  }]);
})(window.angular);
