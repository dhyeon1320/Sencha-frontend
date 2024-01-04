Ext.define('MyApp.view.main.containerBox.BottomContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bottom-container-controller',

    onButtonClicked: function(button) {
        alert(button.getText() + ' 버튼입니다');
    }
});