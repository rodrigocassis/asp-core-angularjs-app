var templatingApp;
!function ()
{
    "use strict"; templatingApp = angular.module("templating_app", ["ui.router"])
}()
    , templatingApp.config(["$locationProvider"
        , "$stateProvider"
        , "$urlRouterProvider"
        , "$urlMatcherFactoryProvider"
        , "$compileProvider"
        , function (e, t, o, r, l)
        {
            window.history && window.history.pushState && e.html5Mode
                ({
                    enabled: !0, requireBase: !0
                }).hashPrefix("!")
                , r.strictMode(!1)
                , l.debugInfoEnabled(!1)
                , t.state("home"
                    , {
                        url: "/"
                        , templateUrl: "./views/home/home.html"
                        , controller: "HomeController"
                    }).state("dashboard"
                        ,
                        {
                            url: "/dashboard"
                            , templateUrl: "./views/home/home.html"
                            , controller: "HomeController"
                        }).state("user"
                            , {
                                url: "/user"
                                , templateUrl: "./views/user/user.html"
                                , controller: "UserController"
                            }).state("about"
                                , {
                                    url: "/about"
                                    , templateUrl: "./views/about/about.html"
                                    , controller: "AboutController"
                                }), o.otherwise("/home")
        }])
    , templatingApp.controller("AboutController"
        , ["$scope"
            , "$http"
            , function (e, t)
            {
                e.title = "About Page"
            }])
    , templatingApp.controller("HomeController"
        , ["$scope", function (e) { e.message = "Welcome to ASP.NET Core!" }])
    , templatingApp.controller("UserController"
        , ["$scope"
            , "$http"
            , function (t, o)
            {
                function r() {
                    o({
                        method: "GET", url: "/api/Values/GetUser/"
                    }).then(function (e) { t.ListUser = e.data }
                        , function (e) { console.log(e) })
                } t.title = "All User"
                    , t.ListUser = null
                    , t.userModel = {}
                    , t.userModel.id = 0
                    , r()
                    , t.getUser = function (e)
                    {
                    o({ method: "GET", url: "/api/Values/GetUserByID/" + parseInt(e.id) }).then(function (e)
                    {
                        t.userModel = e.data
                    }, function (e)
                    {
                        console.log(e)
                    })
                    }, t.saveUser = function ()
                    {
                    o({
                        method: "POST"
                        , url: "/api/Values/PostUser/"
                        , data: t.userModel
                    }).then(function (e)
                    {
                        t.reset()
                            , r()
                    }, function (e)
                    {
                        console.log(e)
                    })
                    }, t.updateUser = function ()
                    {
                    o({
                        method: "PUT"
                        , url: "/api/Values/PutUser/" + parseInt(t.userModel.id)
                        , data: t.userModel
                    }).then(function (e)
                    {
                        t.reset(), r()
                    }, function (e)
                    {
                        console.log(e)
                    })
                    }, t.deleteUser = function (e)
                    {
                        confirm("You are about to delete " + e.Name + ". Are you sure?") && o(
                            {
                                method: "DELETE", url: "/api/Values/DeleteUserByID/" + parseInt(e.id)
                            }).then(function (e)
                            {
                                t.reset(), r()
                            }, function (e)
                            {
                                console.log(e)
                            })
                    }, t.reset = function ()
                {
                    t.userModel = {}, t.userModel.id = 0
                }
            }]), templatingApp.directive("navbarMenu", function () 
            { return { restrict: "E", templateUrl: "views/shared/navbar/nav.html" } }), templatingApp.directive("sidebarMenu", function () { return { restrict: "E", templateUrl: "views/shared/sidebar/menu.html" } });


$scope.valueofdate = new Date(valueofdate);
