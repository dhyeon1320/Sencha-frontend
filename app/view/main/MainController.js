/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
    onButtonClicked: function (button) {
        alert(button.getText());
        
    },

    onSeekButtonClicked: function() {
        this.getView().queryById('hideme').setHidden(false);
    },

    onCheckChanged: function (checkbox, newValue, oldValue) { 
        this.getView().queryById('hideme').setHidden(newValue);
    },

    showCheckbox: function () {
        alert('checkbox show!!!');
    },

    onTextChanged: function (textField, newValue, oldValue) {
        this.getView().queryById('hideme').setHtml(newValue);
    }
});
