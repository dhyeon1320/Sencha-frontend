Ext.define('MyApp230111.view.components.TestfileContainer', {
    extend: 'Ext.Container',
    alias: 'widget.testfile-container',
    cls: 'testfile-container',
    layout: 'vbox',
    defaults: {
        cls: 'testfile-container-items'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: '+문제지 만들기',
                    cls: 'testfile-container-button filemakebutton'
                },
                {
                    xtype: 'button',
                    text: '생성일시순',
                    cls: 'testfile-container-button sortbutton',
                    menu: {
                        items: [
                            {
                                text: '생성일시순',
                                handler: function() {
                                    this.up('button').setText('생성일시순');
                                }
                            },
                            {
                                text: '이름순',
                                handler: function() {
                                    this.up('button').setText('이름순');
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            xtype: 'list',
            bind: {
                store: `{testfilesstore}`
            },
            itemConfig: {
                xtype: 'testfile-card',
                cls: 'testfile-cards',
                viewModel: true
            },

        }
    ]
})