/**
 * Created by ivo on 10.6.16..
 */

const DI = ['dcApiCalls'];

import $ from 'jquery';

export default class RegisterController {
    constructor(dcApiCalls,) {
        // alert(window.location.href);
        this.ac = dcApiCalls;
        this.hash = window.location.href.split('?')[1];
        console.log(this.hash);
    }

    register_sec_step() {

        let data = { h2p: this.hash};
        this.ac.api_post(this.ac.get_api_url('/api/register_secstep'),data)
            .then((r) => {this.register_sec_step_success(r)})
            .catch((r) => this.register_sec_step_error(r));
    }

    register_sec_step_success(res) {

        alert('Login successfull');
        window.location.href = "http://localhost:9111/";

    }

    register_sec_step_error(res){
        alert(`Error: ${res.message}`);
    }

}

RegisterController.$inject = DI;

