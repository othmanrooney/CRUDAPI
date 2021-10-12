
//var app = angular.module('myApp', ['ngRoute']);
//app.config(['$locaionProvider', '$routeProvider', function ($locationProvider, $route, $routeProvider) {
//    $routeProvider.when('../EmployeeList', {
//        templateUrl: '../App/Views/EmployeeList.html',
//        controller: 'EmployeeController'
//    }).when('../AddEmployee', {
//        templateUrl: '../App/Views/AddEmployee.html',
//        controller: 'EmployeeController'
//    }).when('../EditEmplyee/:empId', {
//        templateUrl: '../App/Views/EditEmplyee.html',
//        controller: 'EmployeeController'
//    }).when('../DeleteEmployee/:empId', {
//        templateUrl: '../App/Views/DeleteEmployee.html',
//        controller: 'EmployeeController'
//    }).otherwise({
//        controller: 'EmployeeController'
//    })

//}]);
//app.controller("EmployeeController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
//    $scope.ListOfEmployee;
//    $scope.Status;
//    var BaseUrl = "http://localhost/CRUDAPI";
//    $scope.Close = function () {
//        $location.path('/EmployeeList');
//    };

//    $http.get(BaseUrl + "/api/employee/GetAllEmployee").success(function (data) {
//        $scope.ListOfEmployee = data;
//    }).error(function (data) {
//        $scope.Status = "data not Found";
//    });
//    //Add new employee  
//    $scope.Add = function () {
//        var employeeData = {
//            FirstName: $scope.FirstName,
//            LastName: $scope.LastName,

//        };
//        debugger;
//        $http.post(BaseUrl + "/api/employee/AddEmployee", employeeData).success(function (data) {
//            $location.path('/EmployeeList');
//        }).error(function (data) {
//            console.log(data);
//            $scope.error = "Something wrong when adding new employee " + data.ExceptionMessage;
//        });
//    }

//    //Fill the employee records for update  

//    if ($routeParams.empId) {
//        $scope.Id = $routeParams.empId;

//        $http.get(BaseUrl + "api/employee/GetEmployee/" + $scope.Id).success(function (data) {
//            $scope.FirstName = data.FirstName;
//            $scope.LastName = data.LastName;

//        });

//    }

//    //Update the employee records  
//    $scope.Update = function () {
//        debugger;
//        var employeeData = {
//            EmployeeID: $scope.Id,
//            FirstName: $scope.FirstName,

//        };
//        if ($scope.Id > 0) {

//            $http.put(BaseUrl + "/api/employee/UpdateEmployee", employeeData).success(function (data) {
//                $location.path('/EmployeeList');
//            }).error(function (data) {
//                console.log(data);
//                $scope.error = "Something wrong when adding updating employee " + data.ExceptionMessage;
//            });
//        }
//    }


//    //Delete the selected employee from the list  
//    $scope.Delete = function () {
//        if ($scope.Id > 0) {

//            $http.delete(BaseUrl + "/api/employee/DeleteEmployee/" + $scope.Id).success(function (data) {
//                $location.path('/EmployeeList');
//            }).error(function (data) {
//                console.log(data);
//                $scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
//            });
//        }

//    }
//}]);