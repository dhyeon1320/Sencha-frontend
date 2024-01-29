Ext.define('MyApp230111.view.home.MyPaperBoard', {
    extend: 'MyApp230111.view.home.Board',
    alias: 'widget.mypaperboard',
    viewModel: {
        type: 'mypaperboardviewmodel'
    },
    controller: {
        type: 'mypaperboardcontroller'
    },
    title: '내 문제지 <b class="color-yellow">FREE</b>',
    shortcut: 'mypapers',
    bind: {
        store: `{testfilescompleted}`
    },
    items: [
        {
            xtype: 'segmentedbutton',
            reference: 'mypapers_tab',
            publishes: 'value',
            // tab 바뀔 때마다 연결되는 store가 바뀌는 함수 작성
            listeners: {
                change: 'onMypapersTabChanged'
            },
            defaults: {
                ui: 'simpletab',
                data: {
                    count: 0,
                },
                flex: 1
            },
            items: [
                {
                    bind: {
                        data: {
                            count: `{testfilesediting.count}`
                        }
                    },
                    tpl: [
                        `{count}`,
                        `<br/>`,
                        `편집중 문제지`
                    ],
                    value:0
                },
                {
                    bind: {
                        data: {
                            count: `{testfilescompleted.count}`
                        }
                    },
                    tpl: [
                        `{count}`,
                        `<br/>`,
                        `출제된 문제지`
                    ],
                    value:1
                }
            ],
            value: 0,
            margin: '0 0 20 0'
        },
        {
            xtype: 'mypapergrid',
            reference: 'mypapergrid',
            height: 300,
            rowCount: 6,
            bind: {
                progress: `{mypapers_tab.value}`,
                store: `{store}`
            }
        }
    ],

})