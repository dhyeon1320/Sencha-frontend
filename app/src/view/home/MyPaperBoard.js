Ext.define('MyApp230111.view.home.MyPaperBoard', {
    extend: 'MyApp230111.view.home.Board',
    alias: 'widget.mypaperboard',
    title: '내 문제지 <b class="color-yellow">FREE</b>',
    shortcut: 'mypapers',
    items: [
        {
            xtype: 'segmentedbutton',
            items: [
                {
                    text: 'count</br>편집중 문제지',
                    value:0
                },
                {
                    text: 'count</br>출제한 문제지',
                    value:1
                }
            ],
            value: 0,
            margin: '0 0 20 0'
        },
        {
            xtype: 'mypapergrid'
        }
    ],

})