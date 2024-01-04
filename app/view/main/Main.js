/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    width: '100%',
    cls: 'main-container',
    items: [
        {
            xtype: 'container',
            height: '100%',
            scrollable: true,
            cls: 'primary-container',
            items: [
                {
                    xtype: 'top-container'
                },
                {
                    xtype: 'bottom-container'
                }
            ]
        }  
    ]
});
