Ext.define('MyApp230111.view.home.NoticeBoardGroup', {
    extend:'Ext.Container',
    alias: 'widget.noticeboardgroup',
    weighted: true,
    layout: {
        type: 'hbox'
    },
    gap: 40,
    classCls: 'noticeboardgroup',
    items: {
        list: {
            xtype: 'container',
            gap: 40,
            layout: {
                type: 'vbox',
                pack: 'space-between'
            },
            flex: 1,
            weighted: true,
            items: {
                announcement: {
                    xtype: 'noticelistboard'
                },
                event: {
                    xtype: 'noticelistboard'
                },
                update: {
                    xtype: 'noticelistboard'
                }
            }
        }
    }
})