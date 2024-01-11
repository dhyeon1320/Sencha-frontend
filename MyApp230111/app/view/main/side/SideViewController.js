Ext.define('MyApp230111.view.main.side.SideViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.side-view-controller',

    onTextChanged: function(searchfield, newValue) {
        this.getView().queryById('searchtext').setHtml(newValue);
    }
})