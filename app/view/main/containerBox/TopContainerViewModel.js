Ext.define('MyApp.view.main.containerBox.TopContainerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.top-container-viewmodel',

    data: {
        topContainerButtonName: 'topContainerButtonName',
        isHidden: false,
        isChanged: false,
        isChecked: false
    }
})