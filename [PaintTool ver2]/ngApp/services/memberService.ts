namespace MyApp.Services {
    export class MemberService {
        private memberResource;

        public listMembers() {
            return this.memberResource.query();
        }
        public save(member) {
            return this.memberResource.save(member).$promise;
        }
        public getMember(id: number) {
            return this.memberResource.get({ id: id });
        }
        public deleteMember(id: number) {
            return this.memberResource.delete({ id: id }).$promise;
        }


        constructor($resource: angular.resource.IResourceService) {
            this.memberResource = $resource('/api/members/:id');
        }
    }
    angular.module('MyApp').service('memberService', MemberService);
}

       

