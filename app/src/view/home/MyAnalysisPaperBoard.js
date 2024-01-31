Ext.define('MyApp230111.view.home.MyAnalysisPaperBoard', {
    extend: 'MyApp230111.view.home.Board',
    alias: 'widget.myanalysispaperboard',
    title: '내 분석지 <b class="color-yellow">FREE</b>',
    shortcut: 'analysispapers',
    controller: {
        type: 'myanalysispaperboardcontroller'
    },
    viewModel: {
        type: 'myanalysispaperboardviewmodel'
    },
    bind: {
        store: `{myanalysesediting}`
    },
    items: [
        {
            xtype: 'segmentedbutton',
            reference: 'myanalysis_tab',
            publishes: 'value',
            listeners: {
                change: 'onTabChanged'
            },
            defaults: {
                data: {
                    count: 0
                },
                flex: 1
            },
            items: [
                {
                    bind: {
                        data: {
                            count: `{myanalysesediting.count}`,
                        },
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        '편집중 분석지'
                    ],
                    value: 0
                },
                {
                    bind: {
                        data: {
                            count: `{myanalysescompleted.count}`
                        }
                    },
                    tpl: [
                        '{count}',
                        '<br/>',
                        '출제한 분석지'
                    ],
                    value: 1
                }
            ],
            margin: '0 0 20 0',
            value: 0
        },
        {
            xtype: 'myanalysispapergrid',
            bind: {
                progress: `{myanalyses_tab.value}`,
                store: `{store}`,
            },
            height: 300
        }
    ]
})