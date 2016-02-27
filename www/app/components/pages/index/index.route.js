import template from './index.html!text';
import IndexController from './index.controller';

export default function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('app.index', {
            url: '/',
            scope:{},
            views: {
                mainContent: {
                    controller: IndexController,
                    controllerAs: 'vm',
                    template: template
                }
            }
        });
    }
    ]);
}


