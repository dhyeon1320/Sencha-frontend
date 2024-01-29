Ext.define('MyApp230111.view.home.MyDbBoard', {
    extend: 'MyApp230111.view.home.Board',
    alias: 'widget.mydbboard',
    viewModel: {
        type: 'mydbboardviewmodel'
    },
    controller: {
        type: 'mydbboardcontroller'
    },
    layout: 'vbox',
    title: '나만의 DB <span class="my-db-board__title-detail">(나만의 문제은행 데이터베이스)</span>',
    shortcut: 'mydbs',
    bind: {
        store: `{mydbsempty}`
    },
    items: [
        {
            xtype:'segmentedbutton',
            reference: 'mydbs_tab',
            publishes: 'value',
            listeners: {
                change: 'onTabChanged'
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
                            count: '{mydbsempty.count}'
                        }, 
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        '반려 혹은 빈 DB'
                    ],
                    value: -1
                },
                {
                    bind: {
                        data: {
                            count: '{mydbspdfanalyzing.count}'
                        }, 
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        'PDF 검수중'
                    ],
                    value: 0
                },
                {
                    bind: {
                        data: {
                            count: '{mydbspurchasable.count}'
                        },
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        '결제 가능'
                    ],
                    value: 1
                },
                {
                    bind: {
                        data: {
                            count: '{mydbsdbinprogress.count}'
                        }, 
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        'DB화 진행중'
                    ],
                    value: 2
                },
                {
                    bind: {
                        data: {
                            count: '{mydbsdbcomplete.count}'
                        }, 
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        'DB화 완료 DB'
                    ],
                    value: 4
                },
                {
                    bind: {
                        data: {
                            count: '{mydbsdbpd.count}'
                        }, 
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        '공공 DB(무료)'
                    ],
                    value: 5
                },
            ],
            value: 4,
            margin: '0 0 20 0'
        },
        {
            xtype: 'mydbgrid',
            reference: 'mydbgrid',
            flex: '1 0 320px',
            rowCount: 12,
            bind: {
                progress: `{mydbs_tab.value}`,
                store: `{store}`
            }
        }
    ]
})