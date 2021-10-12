/*/*const { forEach } = require("angular");*/

app.controller("EmployeeController", ['$scope', '$location', 'Service', function ($scope, $location, Service) {
    $scope.ListOfEmployee;
    $scope.firstName = null;
    $scope.LastName = null;
    $scope.Status;
    $scope.Name = 'luay';

    $scope.Close = function () {
        $location.path('/EmployeeList');
    }

    var BaseUrl = 'http://localhost/CRUDAPI';
    
    debugger;
    Service.getAllEmployee()

        .then(function (result) {
            if (result.status == 200) {
                debugger;
                $scope.ListOfEmployee = result.data;
            }
        });

    //Service.add().then(function () {
    //    debugger;
    //    var EmpData = {

    //        FirstName: $scope.FirstName,
    //       LastName: $scope.LastName,
    //    };
    //    debugger;
    //    $scope.ListOfEmployee.Add(Emdata);
        
    //});
    //Get all employee and bind with html table
    //$http.get(BaseUrl +"/api/employee/GetAllEmployee").success(function (data) {
    //    $scope.ListOfEmployee = data;

    //})
    //    .error(function (data) {
    //        $scope.Status = "data not found";

    //    });
    //Add new employee
    //Service.Add().then(
    //    function() {
    //    var employeeData = {
    //        FirstName: $scope.FirstName,
    //        LastName: $scope.LastName,

    //    };
    //    debugger;
    //    $http.post("/api/employee/AddEmployee", employeeData).success(function (data) {
    //        $location.path('/EmployeeList');
    //    }).error(function (data) {
    //        console.log(data);
    //        $scope.error = "Something wrong when adding new employee " + data.ExceptionMessage;
    //    });
    //}
    //);
    

    //Fill the employee records for update

    //if ($routeParams.empId) {
    //    $scope.Id = $routeParams.empId;

    //    $http.get('/api/employee/GetEmployee/' + $scope.Id).success(function (data) {
    //        $scope.FirstName = data.FirstName;
    //        $scope.LastName = data.LastName;

    //    });

    //}

    //Update the employee records
    //$scope.Update = function () {
    //    debugger;
    //    var employeeData = {
    //        EmployeeID: $scope.Id,
    //        FirstName: $scope.FirstName,
    //        LastName: $scope.LastName,

    //    };
    //    if ($scope.Id > 0) {

    //        $http.put("/api/employee/UpdateEmployee", employeeData).success(function (data) {
    //            $location.path('/EmployeeList');
    //        }).error(function (data) {
    //            console.log(data);
    //            $scope.error = "Something wrong when adding updating employee " + data.ExceptionMessage;
    //        });
    //    }
    //}


    ////Delete the selected employee from the list
    //$scope.Delete = function () {
    //    if ($scope.Id > 0) {

    //        $http.delete("http://localhost:60894/api/employee/DeleteEmployee/" + $scope.Id).success(function (data) {
    //            $location.path('/EmployeeList');
    //        }).error(function (data) {
    //            console.log(data);
    //            $scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
    //        });
    //    }

    //}
}]);