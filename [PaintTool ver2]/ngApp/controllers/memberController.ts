namespace MyApp.Controllers {
    export class MemberController {
        public members;
        constructor(private memberService: MyApp.Services.MemberService,
            priavate$location: angular.ILocationService) {
            this.members = memberService.listMembers();
        }
    }
    //export class LoginController {
    //    public login;
    //    constructor(MyAppService: MyApp.Services.MyAppService) {
    //        this.login = "Hello world. this is the LogIn page";
    //    }
    //}

    export class MemebersListController {
        public members;
        public search: string;
        constructor(MyAppService: MyApp.Services.MemberService) {
            this.members = MyAppService.listMembers();
        }
    }

    export class MembersAddController {
        public memberToCreate;
        public loaded;
        constructor(
            private MyAppService: MyApp.Services.MemberService,
            private $location: ng.ILocationService) { }

        addMember() {
            this.loaded = true;
            this.MyAppService.save(this.memberToCreate).then(() => {
                this.loaded = true;
                this.$location.path('/');
            });
        }
    }

    export class MembersEditController {
        public memberToEdit;

        constructor(
            private MyAppService: MyApp.Services.MemberService,
            private $location: ng.ILocationService,
            $routeParams: ng.route.IRouteParamsService) {
            this.memberToEdit = this.MyAppService.getMember($routeParams['id']);
        }

        editMember() {
            this.MyAppService.save(this.memberToEdit).then(() => {
                this.$location.path('/');
            });
        }
    }

    export class MembersDeleteController {
        public memberToDelete;

        constructor(
            private MyAppService: MyApp.Services.MemberService,
            private $location: ng.ILocationService,
            $routeParams: ng.route.IRouteParamsService) {
            this.memberToDelete = this.MyAppService.getMember($routeParams['id'])
        }

        deleteMember() {
            this.MyAppService.deleteMember(this.memberToDelete).then(() => {
                this.$location.path('/');
            });
        }
        cancelDelete() {
            this.$location.path('/');
        }
    }



}
