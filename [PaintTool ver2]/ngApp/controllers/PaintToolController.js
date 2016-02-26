var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(paintToolService) {
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var PaintToolController = (function () {
            function PaintToolController(paintToolService) {
            }
            return PaintToolController;
        })();
        Controllers.PaintToolController = PaintToolController;
        var AboutController = (function () {
            function AboutController(PaintToolService) {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=PaintToolController.js.map