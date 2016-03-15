/**
 * Created by kun on 2015/12/10.
 */

/**
 *图书模块
 * @type {module|*}
 */

var BookModule = angular.module("BookModule");

BookModule
        .directive("edit", function () {
            return {
                restrict: "AE",
                require: "ngModel",
                link: function (scope, element, attrs, ngModel) {
                    element.bind("click", function () {
                        var id = "_book_" + ngModel.$modelValue.id;
                        var obj = $("input[name=" + id + "]");
                        obj.removeClass("inactive").addClass("active").removeAttr("readonly");
                        scope.$apply(function () {
                            scope.showEdit = false;
                        })

                    })
                }
            }
        })

        .directive("update", function () {
            return {
                restrict: "AE",
                require: "ngModel",
                link: function (scope, element, attrs, ngModel) {
                    element.bind("click", function () {
                        var id = "_book_" + ngModel.$modelValue.id;
                        var obj = $("input[name=" + id + "]");
                        obj.removeClass("active").addClass("inactive").attr("readonly");
                        scope.$apply(function () {
                            scope.showEdit = true;
                        })
                    })
                }
            }
        })

        .directive("delete", function () {
            return {
                restrict: "AE",
                require: "ngModel",
                link: function (scope, element, attrs, ngModel) {
                    element.bind("click", function () {
                        scope.$apply(function () {
                            scope.books.pop(ngModel.$modelValue);  //noModel.
                        })
                    })
                }
            }
        })

