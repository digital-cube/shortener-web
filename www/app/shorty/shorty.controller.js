/**
 * Created by ivo on 28.4.16..
 */
let DI = ['dcApiCalls', '$interval','$element', '$timeout','dcLoggedUser','$document'];

import $ from 'jquery';

class ShortyController {
    constructor(dcApiCalls, $interval, $element, $timeout, dcLoggedUser, $document) {
        this.$timeout = $timeout;
        // console.log('OVO JE CONTROLER za shorty');
        this.$element = $element;
        this.long_url = '';
        this.org_long ='';
        this.short_res = '';
        this.exp_days = '0';
        this.custom_as = '';
        this.pd_options = false;
        this.hswitch = false;
        this.histor = [];
        this.$document = $document;
        this.ac = dcApiCalls;
        this.copy_input = false;
        this.storrage = localStorage;
        this.logged_user = dcLoggedUser;
        this.ivo = [];
        this.placeholder = '*for registered users only';
        // this.regex = '[a-zA-Z0-9_][^\s]{5,}';
        this.regexurl ='^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
        this.regexca = '[a-zA-Z0-9_\S]{5,15}';

        let logged = this.storrage.getItem('islogged');
        if(logged){
            this.placeholder = '*optional';
            // $('#custalias').attr('placeholder','*optional');
        }

        $('#pic').hide();
        let log = this.storrage.getItem('history');
        if(log){
            this.ivo = JSON.parse(log);
            this.hswitch = true;
        }
        if(this.ivo === null || this.ivo === [] || this.ivo === undefined){
            this.hswitch = !this.hswitch;
        }
    }

    get_short_url() {
        this.short_res = this.long_url;
        let data = { long_url : this.short_res, exp_days : this.exp_days, custom_alias: this.custom_as};
        let token = this.storrage.getItem('token');
        console.log(token);
        this.ac.api_get(this.ac.get_api_url('/api/create_short'), data, token)
            .then((r) => {this.shorting_success(r)})
            .catch((r) => this.shorting_error(r));
    }

    shorting_success(res) {

        this.org_long = this.long_url;
        this.long_url = this.short_res = `http://min.bz/${res.short_url}`;
        $('#pic').fadeIn();
        this.copy_input = true;
        this.$timeout(()=>{
            this.$element.find('input')[0].focus();
        });
        let _date = new Date();
        _date.setDate(_date.getDate() + +this.exp_days);
        if(this.exp_days === '0'){
            _date = "Never"
        }
        let _histor = {long : this.org_long, short : this.short_res, exp: this.exp_days, ndt : _date};

        if(this.ivo !== null) {
            this.ivo.unshift(_histor);

            this.storrage.setItem('history', angular.toJson(this.ivo));
            console.log(this.histor);
            this.ivo = JSON.parse(this.storrage.history);
        }

    }

    shorting_error(res){
        alert(`Error: ${res.message}`);
        this.hswitch = false;

    }

    cpy_to_cb() {
        $("#input_url").focus();
        document.execCommand('copy');
        
        this.copy_input = false;
        this.long_url = null;
        $('#pic').hide();
    }

    cancel(){
        if (this.copy_input) {
            this.copy_input = false;
            $('#pic').hide();
        }
    }
    
    clear(){
            this.long_url = null;
        $('#pic').hide();
        this.copy_input = false;
    }
    
    delh(){
        this.storrage.clear();
        this.ivo =[];
        this.hswitch = false;
        this.long_url = null;
        $('#pic').hide();
        this.copy_input = false;
        this.pd_options = false;

    }

    remove(array, index){
        array.splice(index, 1);
        this.storrage.clear();
        this.storrage.setItem('history', angular.toJson(array));
        if(array.length === 0) {
            this.storrage.clear();
            this.hswitch = false;
        }
    }
    copyP(array, index){
        
        this._var =array[index].short;
        this.$timeout(()=>{
            $('#temp-copy').focus();
            document.execCommand('copy');
        });
    }
}


ShortyController.$inject = DI;

export default ShortyController;