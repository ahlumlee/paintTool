var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var PaintToolService = (function () {
            function PaintToolService() {
            }
            ;
            return PaintToolService;
        })();
        Services.PaintToolService = PaintToolService;
        angular.module("MyApp").service('paintToolService', PaintToolService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=PaintToolServices.js.map