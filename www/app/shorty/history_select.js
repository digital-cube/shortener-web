/**
 * Created by ivo on 16.5.16..
 */


export default (module) =>  {
    module.directive('selectHistory', () => {
        return {
            restrict: 'A',
            link: (scope, element, attr) => {
                element.on('focus', function() {
                    this.select();
                })
            }
        }
    });
}