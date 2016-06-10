/**
 * Created by ivo on 30.5.16..
 */
const DI = ['dcLoggedUser'];

class OverlaySwitch {
    constructor(dcLoggedUser) {
        this.loggedUser = dcLoggedUser;
        this.smeni_toggle = false;
        this.lmeni_toggle = false;
    }
}


    OverlaySwitch.$inject = DI;

export default function(module) {
    module.service('dcOverlaySwitch', OverlaySwitch);
};