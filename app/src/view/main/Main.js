/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp230111.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    width: '100%',
    cls: 'main-container',
    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            xtype:'header'
        },
        {
            xtype: 'center-view',
            itemId: 'center-view'
        }
    ]
});
