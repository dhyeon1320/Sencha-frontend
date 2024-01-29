Ext.define('MyApp230111.view.home.MyDbBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mydbboardcontroller',

    onTabChanged: function (segmentedbuttonbutton, value) {
        let store;
        switch (value) {
            case -1 :store = this.getStore('mydbsempty'); break;
            case 0 : store = this.getStore('mydbspdfanalyzing'); break;
            case 2 : store = this.getStore('mydbsdbinprogress'); break;
            case 4 : store = this.getStore('mydbsdbcomplete'); break;
            case 5 : store = this.getStore('mydbsdbpd'); break;
            case 1 : 
            case 3 : store = this.getStore('mydbspurchasable'); break;
            default : break;
        }

        this.getView().setStore(store);
    }
})