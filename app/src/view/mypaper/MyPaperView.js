Ext.define('MyApp230111.view.mypaper.MyPaperView', {
    extend: 'Ext.Container',
    alias: 'widget.my-paper-view',
    cls: 'my-paper-view',
    scrollable: true,
    viewModel: {
        type: 'my-paper-viewmodel'
    },

    layout: 'hbox',
    items: [
        {
            xtype: 'side-panel'
        },
        {
            scrollable: true,
            width: '100%',
            height: '95%',
            items: [
                {
                    xtype:'ad-container',
                    enableTools: true
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
                            iconCls: 'x-fa fa-folder',
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
        }
    ]
    
})