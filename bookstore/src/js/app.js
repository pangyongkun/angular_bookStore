/**
 * Created by kun on 2015/12/8.
 */

var routerApp = angular.module("routerApp", ["ui.router", "BookModule", "LoginModule"]);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("index", {
            url: "/index",
            views: {
                "": {
                    templateUrl: "tpls/home.html"
                },
                "main@index": {
                    templateUrl: "tpls/book.html",
                    controller: "BookController"
                }
            }
        })
        .state("login", {
            url: "/login",
            views: {
                "": {
                    templateUrl: "tpls/home.html"
                },
                "main@login": {
                    templateUrl: "tpls/loginForm.html",
                    controller: "LoginController"
                }
            }

        })
        .state("booklist", {
            url: "/booklist",
            templateUrl: "tpls/booklist.html",
            controller:"BookController"
        })

})
