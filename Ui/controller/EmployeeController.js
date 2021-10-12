app.controller("EmployeeController", ['$scope', '$location', 'Service', function ($scope, $location, Service) {
    $scope.ListOfEmployee;
    $scope.Status;
    $scope.Name = 'luay';

    $scope.Close = function () {
        $location.path('/EmployeeList');
    }

    var BaseUrl = 'http://localhost/CRUDAPI';
    //Get all employee and bind with html table
    //$http.get(BaseUrl +"/api/employee/GetAllEmployee").success(function (data) {
    //    $scope.ListOfEmployee = data;

    //})
    //    .error(function (data) {
    //        $scope.Status = "data not found";

    //    });

    Service.getAllEmployee()

        .then(function (result) {
            if (result.status == 200) {
                debugger;

            }
        });
}]);