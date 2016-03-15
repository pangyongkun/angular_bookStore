/**
 * Created by kun on 2015/12/8.
 */

/**
 * 图书模块
 * @type {module|*}
 */
var BookModule = angular.module("BookModule", []);

BookModule.controller("BookController", function ($scope, $http, BookService) {
    $scope.showEdit = true;
    var book = {};
    $scope.addBook = function () {
        book.id = $scope.id;
        book.name = $scope.bookname;
        book.author = $scope.author;
        book.price = $scope.price;
        $scope.books.push(book);
        $scope.bookname = null;
        $scope.author = null;
        $scope.price = null;
        $scope.id = null;
    };
    $scope.deleteBook = function ($index) {
        $scope.books.pop($index);
    };
    $scope.showBook = function () {
        $scope.show = !$scope.show;
        return $scope.show;
    };
    $scope.getBooks = function () {
        BookService
            .getBooks()
                .then(function(data){
                    $scope.books=data;
                })
    }
});


/**
 * 登录模块
 * @type {module|*}
 */

var LoginModule = angular.module("LoginModule", []);

LoginModule.controller("LoginController", function ($scope) {
    $scope.show = false;
    $scope.person = {
        name: "Tom",
        age: 20,
        password: "438799",
        sex: "male"
    };
    $scope.showInfo = function () {
        $scope.show = !$scope.show;
        return $scope.show;
    };
});