Ext.define('MyApp230111.view.main.center.CenterView', {
    extend: 'Ext.Container',
    xtype: 'center-view',
    cls: 'center-view',
    itemId: 'center-view',
    layout: 'card',
    scrollable: true,
    width: '100%',
    height: 'calc(100% - 48px)',
    items: {
        html: 'im-center-view'
    }
})