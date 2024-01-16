Ext.define('MyApp230111.view.main.header.HeaderViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header-view-controller',

    onMyPaperButtonClicked: function (button) {
        this.redirectTo('my-paper-view', true);
    },

    onMyDbButtonClicked: function (button) {
        this.redirectTo('my-db-view', true);
    },

    onHomeButtonClicked: function() {
        this.redirectTo('center-view', true);
    }
})


