/**
 * Created by ivo on 18.5.16..
 */
/**
 * Created by ivo on 28.4.16..
 */
let DI = ['dcApiCalls', '$interval','$element', '$timeout','dcLoggedUser','dcOverlaySwitch'];

// import $ from 'jquery';

class LoginController {
    constructor(dcApiCalls, $interval, $element, $timeout, dcLoggedUser, dcOverlaySwitch) {
        this.$timeout = $timeout;
        // console.log('OVO JE CONTROLER za login');
        this.$element = $element;
        this.ac = dcApiCalls;
        this.username = '';
        this.password = '';
        this.token_storrage = localStorage;
        this.logged_user = dcLoggedUser;
        this.switch = dcOverlaySwitch;
        this.fgt_switch= false;
        this.lgn_switch = true;
        this.re = '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)';
        // this.smeni_toggle = false;

        $('#lgn-form-username').focus();

    }
    
    lgn() {
        if(!this.username || !this.username.match('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')){
            return
        }
        let data = { username: this.username , password : this.password};
        this.ac.api_post(this.ac.get_api_url('/user/login'),data)
            .then((r) => {this.login_success(r)})
            .catch((r) => this.login_error(r));
    }

    login_success(res) {

        alert('Login successfull');
        this.token_storrage.setItem('token', res.token);
        this.token_storrage.setItem('username', this.username);
        this.token_storrage.setItem('islogged', true);
        this.logged_user.login(res);
        this.switch.lmeni_toggle = false;
        $('#custalias').attr('placeholder','*optional');
        $('#custalias').removeAttr('disabled');



    }

    login_error(res){
        alert(`Error: ${res.message}`);
    }

}

LoginController.$inject = DI;

export default LoginController;