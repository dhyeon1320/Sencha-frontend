Ext.define('MyApp230111.view.main.side.WorkSpaceView', {
    extend: 'Ext.Panel',
    alias: 'widget.work-space',
    cls: 'work-space',
    width: '100%',
    ui: 'side-panel-ui',
    title: '작업공간',
    layout: 'vbox',
    defaults: {
        xtype: 'button',
        width: '100%',
        iconCls: 'x-fa fa-folder'
    },
    items: [
        {
            text: 'Test',
        },
        {
            text: '연도별경향',
        }
    ]
})