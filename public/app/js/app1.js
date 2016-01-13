var app = angular.module("groceryListApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/groceryList.html',
            controller: 'HomeController'
    })
    .when('/addItem', {
            templateUrl: 'app/views/addItem.html',
            controller: 'GroceryListItemController'
    })
    .when('/addItem/edit/:id/', {///:cat
            templateUrl: 'app/views/addItem.html',
            controller: 'GroceryListItemController'
    })
    .otherwise({
        redirectTo: "/"
    })
});

/*---------------------------------------------------------------------------*/

app.service('GroceryService', function($http){
    
    var groceryService = [];
    
    groceryService.groceryItems = [];
//    $http({
//        method: 'GET',
//        url: "http://localhost/angular1/data/server_data.json"
//    })
    $http.get("app/data/server_data.json")
        .success(function(data){
            groceryService.groceryItems = data;
        
            for(var item in groceryService.groceryItems){
                groceryService.groceryItems[item].date = new Date(groceryService.groceryItems[item].date);
            }
        })
        .error(function(data, status){
            alert("Things went wrong");
        });
    
    groceryService.findById = function(id){
        
        for(var item in groceryService.groceryItems){
            if(groceryService.groceryItems[item].id === id)
                return groceryService.groceryItems[item];
        }
    };
    
    groceryService.markCompleted = function(entry){
        entry.completed = !entry.completed;
    };
    
    groceryService.getNewId = function(){
        
        if(groceryService.newId){
            groceryService.newId++;
            return groceryService.newId;
        }else{
            var maxId = _.max(groceryService.groceryItems, function(entry){
                return entry.id;
            })
            groceryService.newId = maxId.id + 1;
            return groceryService.newId;
        }
    };
    
    groceryService.removeItem = function(entry){
        
        $http.post("app/data/delete_item.json", {id: entry.id})
            .success(function(data){
                if(data.status == 1){
                    var index = groceryService.groceryItems.indexOf(entry);
                    groceryService.groceryItems.splice(index, 1);
                }
            })
            .error(function(data, status){
            
        });
    }
    
    groceryService.save = function(entry){
        
        var updateItem = groceryService.findById(entry.id);
        
        if(updateItem){
            $http.post("app/data/updated_item.json", entry)
                .success(function(data){
                    if(data.status == 1){
                        updateItem.completed = entry.completed;
                        updateItem.itemName = entry.itemName;
                        updateItem.date = entry.date;
                    }
                })
                .error(function(data, status){
                    
                })
        }else{
            $http.post("app/data/added_item.json", entry)
                .success(function(data){
                    entry.id = data.newId;
                })
                .error(function(data, status){
                    
                });
            
            //entry.id = groceryService.getNewId();
            groceryService.groceryItems.push(entry);
        }
    }
    
    return groceryService;
});

/*-----------------------------------------------------------------------------*/

app.controller('HomeController', ["$scope", 'GroceryService', function($scope, GroceryService){
    
    $scope.appTitle = "Grocery List";
    $scope.groceryItems = GroceryService.groceryItems;
    
    $scope.removeItem = function(entry){
        GroceryService.removeItem(entry);
    }
    
    $scope.markCompleted = function(entry){
        GroceryService.markCompleted(entry);
    }
    
    $scope.$watch(function(){ return GroceryService.groceryItems }, function(groceryItems){
        $scope.groceryItems = groceryItems;
    })
}]);

app.controller('GroceryListItemController', ["$scope", "$routeParams", "$location", 'GroceryService', function($scope, $routeParams, $location, GroceryService){
    
    //$scope.rp = "Route Parameter Value: " + $routeParams.id;// + $routeParams.cat
    if(!$routeParams.id){
        $scope.groceryItem = {id: 0, completed: true, itemName: '', date: new Date()}
    }else{
        $scope.groceryItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
    }
    
    $scope.save = function(){
        GroceryService.save($scope.groceryItem);
        $location.path('/');
    }
    //console.log($scope.groceryItems);
}]);

/*------------------------------------------------------------------------*/

app.directive("tbGroceryItem", function(){
    return{
        restrict: "E",
        templateUrl: "app/views/groceryItem.html"
    }
});

app.directive("navList", function(){
    return{
        restrict: "E",
        templateUrl: "app/views/nav.html"
    }
});