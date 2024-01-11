Ext.define('MyApp230111.view.main.side.WorkSpaceView', {
    extend: 'Ext.Container',
    alias: 'widget.work-space',
    cls: 'work-space',
    width: '30%',
    title: '작업공간',
    layout: 'vbox',
    items: [
        {
            xtype: 'button',
            text: 'Test',
            width: '100%'
        },
        {
            xtype: 'button',
            text: '연도별경향',
            width: '100%'
        }
    ]
})