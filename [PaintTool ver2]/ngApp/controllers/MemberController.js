var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MemberController = (function () {
            function MemberController(memberService, priavate$location) {
                this.memberService = memberService;
                this.members = memberService.listMembers();
            }
            return MemberController;
        })();
        Controllers.MemberController = MemberController;
        //export class LoginController {
        //    public login;
        //    constructor(MyAppService: MyApp.Services.MyAppService) {
        //        this.login = "Hello world. this is the LogIn page";
        //    }
        //}
        var MemebersListController = (function () {
            function MemebersListController(MyAppService) {
                this.members = MyAppService.listMembers();
            }
            return MemebersListController;
        })();
        Controllers.MemebersListController = MemebersListController;
        var MembersAddController = (function () {
            function MembersAddController(MyAppService, $location) {
                this.MyAppService = MyAppService;
                this.$location = $location;
            }
            MembersAddController.prototype.addMember = function () {
                var _this = this;
                this.loaded = true;
                this.MyAppService.save(this.memberToCreate).then(function () {
                    _this.loaded = true;
                    _this.$location.path('/');
                });
            };
            return MembersAddController;
        })();
        Controllers.MembersAddController = MembersAddController;
        var MembersEditController = (function () {
            function MembersEditController(MyAppService, $location, $routeParams) {
                this.MyAppService = MyAppService;
                this.$location = $location;
                this.memberToEdit = this.MyAppService.getMember($routeParams['id']);
            }
            MembersEditController.prototype.editMember = function () {
                var _this = this;
                this.MyAppService.save(this.memberToEdit).then(function () {
                    _this.$location.path('/');
                });
            };
            return MembersEditController;
        })();
        Controllers.MembersEditController = MembersEditController;
        var MembersDeleteController = (function () {
            function MembersDeleteController(MyAppService, $location, $routeParams) {
                this.MyAppService = MyAppService;
                this.$location = $location;
                this.memberToDelete = this.MyAppService.getMember($routeParams['id']);
            }
            MembersDeleteController.prototype.deleteMember = function () {
                var _this = this;
                this.MyAppService.deleteMember(this.memberToDelete).then(function () {
                    _this.$location.path('/');
                });
            };
            MembersDeleteController.prototype.cancelDelete = function () {
                this.$location.path('/');
            };
            return MembersDeleteController;
        })();
        Controllers.MembersDeleteController = MembersDeleteController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=MemberController.js.map