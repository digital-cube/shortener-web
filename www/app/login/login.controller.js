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
        this.username = '';
        this.password = '';
        this.token_storrage = localStorage;
        this.logged_user = dcLoggedUser;
        this.switch = dcOverlaySwitch;
        this.$element = $element;
        this.ac = dcApiCalls;
        this.lgn_switch = true;
        this.fgt_switch= false;
        this.re = '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)';



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

        

    }

    login_error(res){
        alert(`Error: ${res.message}`);
    }

    fgt_pass() {
        if(!this.username || !this.username.match('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')){
            return
        }
        let data = { username: this.username};
        this.ac.api_post(this.ac.get_api_url('/user/password/forgot'),data)
            .then((r) => {this.forgot_success(r)})
            .catch((r) => this.forgot_error(r));

    }

    forgot_success(res) {

        alert('Mail for restart password is sent!');
        this.switch.lmeni_toggle = false;

    }

    forgot_error(res) {

        alert(`Error: ${res.message}`);
    }

   
    // cancel_btn(){
    //     this.lmeni_toggle = false;
    //     this.lgn_switch=false;
    //
    // }
    
   
}

LoginController.$inject = DI;

export default LoginController;