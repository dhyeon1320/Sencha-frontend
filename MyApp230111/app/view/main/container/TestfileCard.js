Ext.define('MyApp230111.view.main.container.TestfileCard', {
    extend: 'Ext.Container',
    alias: 'widget.testfile-card',
    classCls: 'testfile-card',
    items: [
        {
            bind: {
                html: `{record.done == '편집중' ? '편집 진행중' : record.date}`
            },
            alignSelf: 'right'
        },
        {
            bind: {
                html: `{record.title}`
            }
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            bind: {
                                html: `{record.count}`
                            }
                        },
                        {
                            html: '문제수'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            bind: {
                                html: `{record.difficulty}`
                            }
                        },
                        {
                            html: '난이도'
                        }
                    ]
                }
            ]
        }
    ]
})