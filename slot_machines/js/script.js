var num = 0;
(function() {
    var myApp = angular.module('myApp', [])
    myApp.controller('myCtrl', function($scope, $timeout) {
        $scope.photo1Name = "source/0.jpg";
        $scope.photo2Name = "source/0.jpg";
        $scope.photo3Name = "source/0.jpg";
        $scope.startNum = 0;
        $scope.stopNum = 10;
        $scope.totalPhoto = 20;
        var myTimeOut;
        $scope.choosePhoto = function() {
            var number1 = Math.floor((Math.random() * 10)) % $scope.totalPhoto;
            var number2 = Math.floor((Math.random() * 100)) % $scope.totalPhoto;
            var number3 = Math.floor((Math.random() * 100)) % $scope.totalPhoto;
            var path1 = "source/" + number1 + ".jpg";
            var path2 = "source/" + number2 + ".jpg";
            var path3 = "source/" + number3 + ".jpg";
            $scope.photo1Name = path1;
            $scope.photo2Name = path2;
            $scope.photo3Name = path3;
            console.log( $scope.photo1Name);
            //slideLine('ann_box','div',2000,25,20);
            myTimeOut = $timeout($scope.choosePhoto, 100);
            $scope.startNum += 1;
            if ($scope.startNum == $scope.stopNum) {
                $scope.stopTimeOut();
            }
        }

        $scope.stopTimeOut = function() {
            $timeout.cancel(myTimeOut);
            $scope.startNum = 0;
        }
    })
})();
