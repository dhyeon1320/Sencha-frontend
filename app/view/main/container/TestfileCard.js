Ext.define('MyApp230111.view.main.container.TestfileCard', {
    extend: 'Ext.Container',
    alias: 'widget.testfile-card',
    classCls: 'testfile-card',
    bind: {
        itemId: `{record.QuestionGroupId}`
    },
    controller: {
        type: 'testfile-card-controller'
    },
    items: [
        {
            bind: {
                html: `{record.done == '편집중' ? '편집 진행중' : record.date}`
            },
            cls: 'testfile-card-header'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            cls: 'testfile-card-body',
            items: [
                {
                    bind: {
                        html: `{record.title}`
                    },
                    cls: 'testfile-card-title'
                },
                {
                    xtype: 'button',
                    text: '문제 보기',
                    handler: 'onTestfileButtonClicked'
                }
            ]
        },

        {
            xtype: 'container',
            layout: 'hbox',
            cls: 'testfile-card-footers',
            defaults: {
                cls: 'testfile-card-footer'
            },
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