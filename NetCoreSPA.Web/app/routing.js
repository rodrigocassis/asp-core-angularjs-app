templatingApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$compileProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $compileProvider) {

        //console.log('Appt.Main is now running')
        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            }).hashPrefix('!');
        };
        $urlMatcherFactoryProvider.strictMode(false);
        $compileProvider.debugInfoEnabled(false);

        $stateProvider
            .state('user', {
                url: '/',
                templateUrl: './views/home/user.html',
                controller: 'HomeController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: './views/home/user.html',
                controller: 'HomeController'
            })
            .state('user', {
                url: '/user',
                templateUrl: './views/user/user.html',
                controller: 'UserController'
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about/about.html',
                controller: 'AboutController'
            });

        $urlRouterProvider.otherwise('/user');
    }]); 
