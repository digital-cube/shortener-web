import $ from 'jquery';

const DI = [];

export default class LayoutController {

    constructor() {
        $( window ).resize(this.setupWindowSize);
        this.setupWindowSize();
    }

    setupWindowSize() {
        let height=window.innerHeight;
        let headerHeight = 2*14;
        let footerHeight = 2*14;
        let contentHeight = height-headerHeight-footerHeight-2;

        $('dc-header').css('height', headerHeight+'px');
        $('dc-footer').css('height', footerHeight+'px');
        $('dc-content').css('height', contentHeight+'px');
    }
}

LayoutController.$inject = DI;
