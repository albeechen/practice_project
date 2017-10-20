/*
//網頁load完會執行一次
//五個屬性各別是：外面div的id名稱、包在裡面的標籤類型
//延遲毫秒數、速度、高度
slideLine('ann_box','div',2000,25,20);
*/
/*var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.photoname = "source/001.jpg";
    $scope.ChoosePhoto = function() {
      var number = (Math.random() * 10)%3;
      console.log(number);
    }
});*/
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
            var number2 = Math.floor((Math.random() * 10)) % $scope.totalPhoto;
            var number3 = Math.floor((Math.random() * 10)) % $scope.totalPhoto;
            var path1 = "source/" + number1 + ".jpg";
            var path2 = "source/" + number2 + ".jpg";
            var path3 = "source/" + number3 + ".jpg";
            $scope.photo1Name = path1;
            $scope.photo2Name = path2;
            $scope.photo3Name = path3;
            console.log(path1);
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
