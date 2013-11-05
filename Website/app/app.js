/*#######################################################################
  
  Pranav Gupta
 Current folder structure:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

//var app = angular.module('masterApp', []);

//This configures the routes and associates each route with a view and a controller
//app.config(function ($routeProvider) {
//    $routeProvider
//        .when('/stores',
//            {
//                controller: 'StoresController',
//                templateUrl: '/app/partials/storeID.html'
//            })
//        //Define a route that has a route parameter in it (:customerID)
//        .when('/stores/:storeID',
//            {
//                controller: 'StoreController',
//                templateUrl: '/app/partials/storeID.html'
//            })
//        //Define a route that has a route parameter in it (:customerID)
//        .when('/products',
//            {
//                controller: 'ProductsController',
//                templateUrl: '/app/partials/products.html'
//            })
//        .when('/products/:productID',
//            {
//                controller: 'ProductController',
//                templateUrl: '/app/partials/productID.html'
//            })
//        .when('/reviewers',
//            {
//                controller: 'ReviewersController',
//                templateUrl: '/app/partials/reviewers.html'
//            })
//        .when('/reviewers/:reviewerID',
//            {
//                controller: 'ReviewerController',
//                templateUrl: '/app/partials/reviewerID.html'
//            })
//        .otherwise({ redirectTo: '/stores' });
//});
//
//
//
//
//

angular
    .module('guest',[])
    .config(function($routeProvider){
        $routeProvider
            .when ('/',{
                templateUrl:'app/views/homePage.html'
            });
    })
    .controller('homePage',function($scope){
        //dummy json
    });
