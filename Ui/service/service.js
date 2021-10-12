var app = angular.module('myApp', []);
var BaseUrl = 'http://localhost/CRUDAPI';
app.factory('Service', ['$http', function ($http) {
    return {
        getAllEmployee: function () {
            return $http.get(BaseUrl + '/api/employee/GetAllEmployee');
        }
    }
}
]);