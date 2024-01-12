Ext.define('MyApp230111.view.main.container.MyPaperView', {
    extend: 'Ext.Container',
    alias: 'widget.my-paper-view-container',
    cls: 'my-paper-view-container',
    scrollable: true,
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
            cls: 'menu-container',
            items: [
                {
                    html: '내 문제지',
                    cls: 'menu-components'
                },
                {
                    xtype: 'button',
                    text: '작업공간',
                    cls: 'menu-components'
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