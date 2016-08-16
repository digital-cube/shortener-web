
let DI = ['dcApiCalls', '$interval', 'dcLoggedUser', 'dcOverlaySwitch'];

class HeaderController{
    constructor(dcApiCalls, $interval, dcLoggedUser, dcOverlaySwitch ){
        this.logged_user = dcLoggedUser;
        this.switch = dcOverlaySwitch;

    }
}

HeaderController.$inject = DI;

export default HeaderController;