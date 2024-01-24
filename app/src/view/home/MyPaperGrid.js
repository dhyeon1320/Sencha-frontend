Ext.define('MyApp230111.view.home.MyPaperGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.mypapergrid',
    columns: [
        {
            text: '제목',
            flex: 1,
            dataIndex: 'title'
        },
        {
            text: '문제수'
        },
        {
            text: '평균난이도'
        },
        {
            text: '생성일자'
        },
    ]
})