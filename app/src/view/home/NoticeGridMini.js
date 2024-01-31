Ext.define('MyApp230111.view.home.NoticeGridMini', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.noticegridmini',
    // grid는 사용하지만 header는 사용하지 않음
    hideHeaders: true,
    itemConfig: {
        viewModel: true,
    },
    variableHeights: true,
    rowLines: false,
    columns: [
        {
            text: '제목',
            dataIndex: 'title',
            flex: 1
        }
    ]
})