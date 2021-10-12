var BaseUrl = 'http://localhost/CRUDAPI';
var app = angular.module('myApp', []);

app.factory('Service', ['$http', function ($http) {
    return {
        getAllEmployee: function () {
            debugger;
             return $http.get(BaseUrl + '/api/employee/GetAllEmployee');
        },
        add: function () {
            debugger
            return $http.post(BaseUrl+'/api/employee/AddEmployee');
        },
        updateEmployee: function () {
            return $http.post(BaseUrl + '/api/employee/UpdateEmployee');
        },
        deleteEmployee: function () {

            return $https.get(BaseUrl + '/api/employee/DeleteEmployee')
        }
    }
}
]);
//https://localhost:44379