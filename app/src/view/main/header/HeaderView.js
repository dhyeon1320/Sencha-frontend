Ext.define('MyApp230111.view.main.header.HeaderView', {
    extend: 'Ext.Panel',
    alias: 'widget.header',
    xtype: 'header',
    cls: 'header-panel',
    ui: 'header-panel-ui',
    controller: {
        type: 'header-view-controller'
    },
    tbar: [
        {
            xtype: 'button',
            text: '수학비서',
            cls: 'mathsecr',
            handler: 'onHomeButtonClicked'
        },
        {
            xtype: 'spacer',
            html: '수학비서1님 P100000',
            classCls: 'space'
        },
        {
            xtype: 'spacer',
            classCls: 'space'
        },
        {
            xtype: 'button',
            cls: 'header-button',
            text: '즐겨찾기',
            handler: 'onButtonClicked',
            disabled: true
        },
        {
            xtype: 'button',
            cls: 'header-button',
            text: '내 문제지',
            handler: 'onMyPaperButtonClicked'
        },
        {
            xtype: 'button',
            cls: 'header-button',
            text: '나만의 DB',
            handler: 'onMyDbButtonClicked'
        },
        {
            xtype: 'button',
            cls: 'header-button',
            text: '포인트 충전↗',
        },
        {
            xtype: 'button',
            cls: 'header-button',
            text: '전체메뉴+',
            menu: {
                defaults: {
                    handler: 'onButtonClicked'  
                },
                items: [
                    {text: '홈'},
                    {text: '내 문제지'},
                    {text: '내 분석지'},
                    {text: '나만의 DB'},
                    {text: '공지사항'},
                    {text: '자주찾는질문'},
                    {text: '1:1 문의'},
                    {text: '랜딩페이지↗'},
                    {text: '수학비서카페'},
                    {text: '포인트 충전'},
                    {text: '사용법 보러가기'},
                    {text: '단축키 안내'},
                    {text: '로그아웃'}
                ]
            }
        }

    ]
})