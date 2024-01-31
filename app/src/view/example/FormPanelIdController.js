Ext.define('MyApp230111.view.example.FormPanelIdController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formpanelidcontroller',

    onSubmitButtonClicked: function(button) {
        const formpanel = button.up('formpanelid');
        debugger
        console.log(formpanel.getValues());
    }
})