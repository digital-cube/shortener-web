/**
 * Created by ivo on 4.5.16..
 */

const DI = ['$q', '$http', 'dcConfig'];

class ApiCalls {
    constructor($q, $http, dcConfig) {
        // console.log('API CALLS constructor');
        this.$q = $q;
        this.$http = $http;
        this.dcc = dcConfig;
    }

    get_api_url(_uri) {
        return `http://${this.dcc.api_url}${_uri}`;
    }

    _apicall(_url, data, method, token){
        let deferred = this.$q.defer();
        let req_data = {
            method: method,
            url: _url,
            params: data
        };
        if (token !== 'undefined' && token !== undefined && token) {
            req_data['headers'] = {"Authorization": token};
        }
        let _request = this.$http(req_data);
        _request.success(
            (result) => {
                deferred.resolve(result);
            }).error(
            (result) => {
                deferred.reject(result);
            }
        );
        return deferred.promise;

    }

    api_get(url, data, token = undefined){
        return this._apicall(url, data,'GET', token)
    }
    
    api_post(url, data, token = undefined){
        return this._apicall(url, data,'POST', token)
    }
    

}
ApiCalls.$inject = DI;

export default (module) => {
    module.service('dcApiCalls', ApiCalls);
}