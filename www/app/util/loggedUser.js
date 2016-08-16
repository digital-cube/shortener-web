/**
 * Created by ivo on 25.5.16..
 */
const DI = ['dcApiCalls'];

import $ from 'jquery';


class LoggedUser {
    constructor(dcApiCalls) {
        
        this.ac = dcApiCalls;
        this.storrage = localStorage;

        
    }

    login(user_data) {

        this.islogged = true;
        this.set_token(user_data['token']);
        


    }

    set_token(tk) {
        this.storrage.setItem('token', tk);
    }
    
    clear_token() {
        this.storrage.removeItem('token');
    }

    logout(){
        this.clear_logged_user();
        // $('#custalias').attr('placeholder','*for registered users only');
    }

    clear_logged_user(){

        this.storrage.removeItem('islogged');
        this.storrage.removeItem('username');
        this.username = null;

        this.clear_token();


    }

    logout_base() {
        this.ac.api_post(this.ac.get_api_url('/user/logout'),{}, this.storrage.getItem('token'))
            .then((r) => {this.logout_success(r)})
            .catch((r) => this.login_error(r));
    }

    logout_success(res) {

        alert('Logout successfull');
        this.islogged = false;
        $('#custalias').val('');


    }

    login_error(res){
        alert(`Error: ${res.message}`);
    }
}

LoggedUser.$inject = DI;

export default function(module) {
    module.service('dcLoggedUser', LoggedUser);
};

