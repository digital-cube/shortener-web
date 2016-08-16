
let DI = ['dcApiCalls', '$interval', '$element','$document'];

import $ from 'jquery';

class ShortyController {
    constructor(dcApiCalls, $interval, $element, $document) {

        this.longUrl='';
        this.long='';
        this.rez='';
        this.shortUrl='';
        this.exp_days = '0';
        this.hstory=[];
        this.his=[];
        this.sub=false;
        this.copy=false;
        this.hswitch=false;
        this.options=true;
        this.ac = dcApiCalls;
        this.element= $element;
        this.document= $document;

        this.storrage = localStorage;
        this.regexlu='/^(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)^/';
        

        let hs = this.storrage.getItem('history');
        if(hs){
            this.hstory = JSON.parse(hs);
            this.hswitch = true;
        }
        if(this.hstory === null || this.hstory === [] || this.hstory === undefined){
        this.hswitch = !this.hswitch;
        }

    }

    get_short(){
        this.shortUrl = this.longUrl;
        let data = { long_url : this.shortUrl, exp_days: this.exp_days};
      
        this.ac.api_get(this.ac.get_api_url('/api/create_short'), data)
            .then((r) => {this.short_success(r)})
            .catch((r) => this.short_error(r));

        
    }

    short_success(res){
        
        this.long = this.longUrl;
        this.rez = `http://min.bz/${res.short_url}`;
        this.longUrl = this.rez;
        this.copy = true;

        
        let _date = new Date();
            _date.setDate(_date.getDate() + +this.exp_days);
        if(this.exp_days === '0'){
        _date = "Never"
        }
    let his = {Long: this.long, Short: this.rez, datum: _date};

    if(this.hstory !== null) {
        this.hstory.unshift(his);

        this.storrage.setItem('history', angular.toJson(this.hstory));
        console.log(this.his);
        this.hstory = JSON.parse(this.storrage.history);
    }
        
        
    }

    short_error(res){
        alert(`Error: ${res.message}`);
        this.hswitch = true;

    }

    copy_btn(){

        $('#enter_url').focus();
        document.execCommand('copy');


    }
    
    cancel_btn(){
        this.longUrl = null;
        this.copy = false;
        
    }

    delete(){
       this.storrage.clear();
        this.hstory=[];
        this.hswitch=false;
        this.longUrl=null;
        this.copy=false;
        this.exp_days="0";
        
        
    }
    
    delete_one(array, index){
        array.splice(index,1);
        this.storrage.clear();
        this.storrage.setItem('history', angular.toJson(array));
        if(array.length === 0){
            this.storrage.clear();
            this.hswitch=false;
            this.copy=false;
            this.longUrl=null;
            this.exp_days="0";
        }
    }
}

ShortyController.$inject = DI;

export default ShortyController;