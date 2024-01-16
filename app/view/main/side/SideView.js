Ext.define('MyApp230111.view.main.side.SideView', {
    extend: 'Ext.Panel',
    alias: 'widget.side-panel',
    cls: 'side-panel',
    docked: 'left',
    ui: 'side-panel-ui',
    height: '95%',
    controller: {
        type: 'side-view-controller'
    },
    requires: [
        'Ext.panel.Collapser'
    ],
    width: '17.8%',
    title: '<span>내 문제지</span>',
    collapsible: {
        direction: 'left',
    },
    resizable: {
        maxSize: 620,
        minSize: 300,
        edges: 'east',
        dynamic: true,
        split: true
    },
    items: [
        {
            xtype: 'searchfield',
            padding: '20 20 0 20',
            placeholder: '문제지 제목을 검색하세요',
            listeners: {
                change: 'onTextChanged'
            }
        },
        {
            html: '',
            padding: 20,
            itemId : 'searchtext'
        },
        {
            xtype: 'work-space'
        }
    ]
})