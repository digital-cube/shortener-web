const DI = ['$q','$http'];

export default class ShortenerBoxController {
    constructor($q, $http) {
        this.input_url='www.digitalcube.rs';
        this.answer_exsists=false;

        this.$q=$q;
        this.$http=$http;


    }

    clearButtonClicked() {
        this.answer_exsists=false;
        this.input_url='';
        this.response='';
    }

    submit() {

        this.fetchResult();
    }

    fetchResult(url) {

        let that=this;

        let deferred = this.$q.defer();
        let request = this.$http({
            method: 'GET',
            url: `http://api.min.bz/api/short?url=`+this.input_url
        });
        request.success(function (response) {
            console.log('/login :: success');
            console.log(response);

            that.response='http://min.bz/'+response.message;
            that.answer_exsists=true;

            //deferred.resolve(response);
        }).error(function (response) {
            console.log('/login :: error');
            //deferred.resolve(response);
        });

        return deferred.promise;


    }

}

ShortenerBoxController.$inject = DI;