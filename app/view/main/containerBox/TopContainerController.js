Ext.define('MyApp.view.main.containerBox.TopContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.top-container-controller',

    
    onHideButtonClicked: function (button) {
        
        this.getView().queryById('hideme').setHidden(true);
        alert('글씨 없애기');
        
    },

    onSeekButtonClicked: function(button) {
        this.getView().queryById('hideme').setHidden(false);
        alert('글씨 나타내기');
    },

    onCheckChanged: function(checkbox, newValue) {
        if (newValue) {
            this.getView().queryById('hideme').setHidden(newValue);
            alert('글씨 없애기');
        } else {
            this.getView().queryById('hideme').setHidden(newValue);
            alert('글씨 나타내기');
        }
    },

    showCheckbox: function(checkbox){
        alert('체크박스 발견!');
    },

    onTextChanged: function(textField, newValue, oldValue) {
        this.getView().queryById('hideme').setHtml(newValue);
    }
})