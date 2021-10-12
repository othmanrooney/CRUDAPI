

//$locationProvider, $route,
var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  
    $routeProvider.when('/EmployeeList', {
        templateUrl: '/App/Views/EmployeeList.html',
        controller: 'EmployeeController'
    }).when('/AddEmployee', {
        templateUrl: '/App/Views/AddEmployee.html',
        controller: 'EmployeeController'
    }).when('/EditEmpolyee/:Id', {
        templateUrl: '/App/Views/EditEmployee.html',
        controller: 'EmployeeController'
    }).when('/DeleteEmployee/:Id', {
        templateUrl: '/App/Views/DeleteEmployee.html',
        controller: 'EmployeeController'
    }).otherwise({
        controller: 'EmployeeController'
    })

}]);
app.controller("EmployeeController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.ListOfEmployee;
    $scope.Status;
    $scope.Id;
   /* $scope.Id = 4;*/
  
  /*  $locationProvider.html5Mode(true);*/
    var BaseUrl = "http://localhost/CRUDAPI";
    $scope.Close = function () {
        $location.path('/EmployeeList');
    };
 

    $http.get(BaseUrl + "/api/employee/GetAllEmployee").then(function (response) {
        $scope.ListOfEmployee = response.data;
    
    });
    
    $scope.Add = function () {
        var employeeData = {
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,

        };
        debugger;
        $http.post(BaseUrl + "/api/employee/AddEmployee", employeeData).then(function (response) {
            
            alert("ture");
            $location.path('/EmployeeList');
           
        })
    }

 

    if ($routeParams.Id) {
        $scope.Id = $routeParams.Id;

        $http.get(BaseUrl + "api/employee/GetEmployee/" + $scope.Id).then(function (response) {
            $scope.FirstName = response.data.FirstName;
            $scope.LastName = response.data.LastName;

        });

    }
    //$scope.Update = function (item) {
    //    debugger;
    //    $scope.employeeData = {
    //        EmployeeID: item.Id,
    //        FirstName: item.FirstName,
    //        LastName: item.LastName

    //    };
    //    if (item.Id > 0) {
    //        debugger;
    //        $scope.selectId = item.id;
    //        $http.put(BaseUrl + '/api/employee/UpdateEmployee', employeeData).then(function (response) {
    //            console.log('DATA : ' + response.data);
    //            $location.path('/EmployeeList');

    //            debugger;
    //        })
    //    }
    //    debugger;
    //}
    function getParamter(parameterName) {
        let paramters = new URLSearchParams(window.location.search);
        alert(paramters);
        alert(window.location.hash.substring(window.location.hash.indexOf('=') + 1));
        return paramters.get(parameterName);
    }
    $scope.Update = function () {
        //var searchObject = $location.search("Id");

        //// $location.search(); reutrn object 
        //// searchObject = { foo = 'abcd' };

        //alert(searchObject.hash);
        /*$scope.target= $location.search()['target'];*/
        $scope.Id = window.location.hash.substring(window.location.hash.indexOf('=') + 1);
        debugger;
        var employeeData = {
            Id: $scope.Id,
            FirstName: $scope.FirstName,
            LastName: $scope.LastName

        };
        if ($scope.Id > 0) {
            debugger;
            $http.post(BaseUrl + "/api/employee/UpdateEmployee", employeeData).then(function (response) {
                console.log('DATA : ' + response.data);
                $location.path('/EmployeeList');
                debugger;
            })
        }
        debugger;
    }


   
    $scope.Delete = function () {
        $scope.Id = window.location.hash.substring(window.location.hash.indexOf('=') + 1);
        if ($scope.Id > 0) {

            $http.post(BaseUrl + "/api/employee/DeleteEmployee/" + $scope.Id).then(function (response) {
                $location.path('/EmployeeList');
                
            })
        }

    }
    
}]);