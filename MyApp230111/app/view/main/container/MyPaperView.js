Ext.define('MyApp230111.view.main.container.MyPaperView', {
    extend: 'Ext.Container',
    alias: 'widget.my-paper-view-container',
    cls: 'my-paper-view-container',
    alignself: 'center',
    viewModel: {
        type: 'my-paper-viewmodel'
    },
    items: [
        {
            xtype:'ad-container'
        },
        {
            xtype:'container',
            layout: 'hbox',
            items: [
                {
                    html: '내 문제지'
                },
                {
                    xtype: 'button',
                    text: '작업공간'
                }
            ]
        },
        {
            xtype: 'folder-container'
        },
        {
            xtype: 'testfile-container'
        }
    ]
})