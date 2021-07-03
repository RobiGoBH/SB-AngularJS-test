'use strict';

angular.module('userMgrApp', ['ngResource'])

    .factory('UsersJsonService', function($resource) {
        return $resource('src/app/assets/data/users.json');
    })
    
    .factory('UserDataService', function(UsersJsonService) {
        return{
            getUsers : function () {     
                return UsersJsonService.query(
                    {},
                    function(data) {
                        data.forEach((user) => {
                        user.registered = (user.registered)? new Date(user.registered.replace(' ','')):user.registered;
                        user.balance = (user.balance)? parseFloat(user.balance.replace(',','')): user.balance;
                        });
                    },
                    function(data) {
                            console.log('Something goes wrong during loading the users data');
                    }
                    );
            }
        };
    });