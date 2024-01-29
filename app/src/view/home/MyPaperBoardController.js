Ext.define('MyApp230111.view.home.MyPaperBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mypaperboardcontroller',

    onMypapersTabChanged: function (button, value) {
        let store;
        switch (value) {
            case 0: store = this.getStore('testfilesediting'); break;
            case 1: store = this.getStore('testfilescompleted'); break;
            default: break;
        }

        this.getView().setStore(store);
    }
})