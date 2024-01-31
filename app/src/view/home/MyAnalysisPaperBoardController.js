Ext.define('MyApp230111.view.home.MyAnalysisPaperBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myanalysispaperboardcontroller',

    onTabChanged: function (button, value) {
        let store;

        switch (value) {
            case 0: store = this.getStore('myanalysesediting'); break;
            case 1: store = this.getStore('myanalysescompleted'); break;
            default: break;
        }

        this.getView().setStore(store);
    }
})