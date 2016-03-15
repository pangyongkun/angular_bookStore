/**
 * Created by kun on 2015/12/13.
 */

var BookModule = angular.module("BookModule");

BookModule.factory("BookService",function($q,$http){
    return {
        getBooks:function(){
            var deferred=$q.defer();
            $http.get("http://localhost:63342/bookstore/src/data/books.json")
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(reson){
                    deferred.reject(reson);
                })
            return deferred.promise;
        }
    }
})
