import template from './admin.html!text';
import AdminController from './admin.controller';

export default function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('app.admin', {
            url: '/admin',
            template: template,
            controller: AdminController,
            controllerAs: 'vm',
            scope:{},
            views: {
                mainContent: {
                    template: template
                }
            }
        });
    }
    ]);
}


