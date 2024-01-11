Ext.define('MyApp230111.view.main.container.TestfileContainer', {
    extend: 'Ext.Container',
    alias: 'widget.testfile-container',
    cls: 'testfile-container',
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: '+문제지 만들기',
                    handler: 'onMakeButtonClicked'
                },
                {
                    xtype: 'button',
                    text: '생성일시순',
                    menu: {
                        items: [
                            {text: '생성일시순'},
                            {text: '이름순'}
                        ]
                    }
                }
            ]
        },
        {
            xtype: 'componentdataview',
            layout: {
                type: 'hbox'
            },
            bind: {
                store: `{testfilesstore}`
            },
            itemConfig: {
                xtype: 'testfile-card',
                viewModel: true
            }
        }
    ]
})