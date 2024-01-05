Ext.define('MyApp.view.main.containerBox.TopContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.top-container-controller',

    
    onToggleButtonClicked: function (button) {

        if (this.getViewModel().get('isChanged')) {
            this.getViewModel().set('isHidden', true);
            this.getViewModel().set('isChanged', false);
        } else {
            this.getViewModel().set('isHidden', false);
            this.getViewModel().set('isChanged', true);
        }
        
    },

    onCheckBoxChanged: function(checkbox, newValue, oldValue) {
        this.getViewModel().set('isChecked',newValue);
    },

    showCheckbox: function(checkbox){
        alert('체크박스 발견!');
    },

    onTextChanged: function(textField, newValue, oldValue) {
        this.getView().queryById('hideme').setHtml(newValue);
    }
})