Ext.define('MyApp230111.view.main.header.HeaderViewContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header-view-controller',

    onButtonClicked: function (button) {
        alert(`${button._text} 입니다`)
    }
})


