var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngRoute', 'ngResource', "ui.bootstrap"]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .when('/about', {
            templateUrl: '/ngApp/views/about.html',
            controller: MyApp.Controllers.AboutController,
            controllerAs: 'vm'
        })
            .when('/member', {
            templateUrl: '/ngApp/views/member.html',
            controller: MyApp.Controllers.MemberController,
            controllerAs: 'vm'
        })
            .when('/paintTool', {
            templateUrl: "/ngApp/views/paintTool.html",
            controller: MyApp.Controllers.PaintToolController,
            controllerAs: 'vm'
        })
            .when('/login', {
            templateUrl: '/ngApp/views/login.html',
            controller: MyApp.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .when('/register', {
            templateUrl: '/ngApp/views/register.html',
            controller: MyApp.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .when('/externalLogin', {
            templateUrl: '/ngApp/views/externalLogin.html',
            controller: MyApp.Controllers.ExternalLoginController,
            controllerAs: 'vm'
        })
            .when('/externalRegister', {
            templateUrl: '/ngApp/views/externalRegister.html',
            controller: MyApp.Controllers.ExternalRegisterController,
            controllerAs: 'vm'
        })
            .when('/confirmEmail', {
            templateUrl: '/ngApp/views/confirmEmail.html',
            controller: MyApp.Controllers.ConfirmEmailController,
            controllerAs: 'vm'
        })
            .otherwise({
            redirectTo: '/ngApp/views/notFound.html'
        });
        $locationProvider.html5Mode(true);
    });
    angular.module('MyApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        });
    });
    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
    angular.module('MyApp').directive("drawing", function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                var ctx = element[0].getContext('2d');
                // variable that decides if something should be drawn on mousemove
                var drawing = false;
                // the last coordinates before the current move
                var lastX;
                var lastY;
                element.bind('mousedown', function (event) {
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                    // begins new line
                    ctx.beginPath();
                    drawing = true;
                });
                element.bind('mousemove', function (event) {
                    if (drawing) {
                        // get current mouse position
                        var currentX = event.offsetX;
                        var currentY = event.offsetY;
                        draw(lastX, lastY, currentX, currentY);
                        // set current coordinates to last one
                        lastX = currentX;
                        lastY = currentY;
                    }
                });
                element.bind('mouseup', function (event) {
                    // stop drawing
                    drawing = false;
                });
                // canvas reset
                function reset() {
                    element[0].width = element[0].width;
                }
                function draw(lX, lY, cX, cY) {
                    // line from
                    ctx.moveTo(lX, lY);
                    // to
                    ctx.lineTo(cX, cY);
                    // color
                    ctx.strokeStyle = "#4bf";
                    // draw it
                    ctx.stroke();
                }
            }
        };
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map