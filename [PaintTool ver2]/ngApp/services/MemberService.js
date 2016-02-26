var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MemberService = (function () {
            function MemberService($resource) {
                this.memberResource = $resource('/api/members/:id');
            }
            MemberService.prototype.listMembers = function () {
                return this.memberResource.query();
            };
            MemberService.prototype.save = function (member) {
                return this.memberResource.save(member).$promise;
            };
            MemberService.prototype.getMember = function (id) {
                return this.memberResource.get({ id: id });
            };
            MemberService.prototype.deleteMember = function (id) {
                return this.memberResource.delete({ id: id }).$promise;
            };
            return MemberService;
        })();
        Services.MemberService = MemberService;
        angular.module('MyApp').service('memberService', MemberService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=MemberService.js.map