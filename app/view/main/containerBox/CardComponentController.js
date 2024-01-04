Ext.define('MyApp.view.main.containerBox.CardComponentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.card-component-controller',

    onCardButtonClicked: function(button) {
        alert('해설 작성 중입니다.');
    }
})