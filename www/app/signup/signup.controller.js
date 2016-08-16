/**
 * Created by ivo on 18.5.16..
 */
/**
 * Created by ivo on 28.4.16..
 */
let DI = ['dcApiCalls','$element', '$timeout','dcOverlaySwitch','dcLoggedUser'];

// import $ from 'jquery';

class SignupController {
    constructor(dcApiCalls, $element, $timeout,dcOverlaySwitch,dcLoggedUser) {
        this.$timeout = $timeout;
        // console.log('OVO JE CONTROLER za signup');
        this.$element = $element;
        this.ac = dcApiCalls;
        this.smeni_toggle = false;
        this.username = '';
        this.password = '';
        this.token_storrage = localStorage;
        this.switch = dcOverlaySwitch;
        this.logged_user = dcLoggedUser;
        this.re = '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)';

        $('#sgn-form-username').focus();
    }

    signup() {
        if(!this.username || !this.username.match('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')){
            return
        }
        let data = {};
        if(this.password === this.password){
            data = { username: this.username , password : this.password};
        }
        else {
            alert('Passwords do not match');
            return
        }
        this.ac.api_post(this.ac.get_api_url('/user/register'), data)
            .then((r) => {this.signing_success(r)})
            .catch((r) => this.signing_error(r));
    }

    signing_success(res) {

        alert('Activation mail was sent to your email!');
        this.switch.smeni_toggle= false;
        
    }

    signing_error(res){
        alert(`Error:${res.message}`);
    }


}
SignupController.$inject = DI;

export default SignupController;