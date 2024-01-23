Ext.define('MyApp230111.view.home.HomeView', {
    extend: 'Ext.Container',
    alias: 'widget.home',
    weighted: true,
    items: {
        header: {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [
                {
                    xtype: 'button',
                    html: '나무, 수학비서1님 >',
                    userCls: 'home-user-button',
                    textAlign: 'left',
                    height: '100px'
                    // handler: 'onHomeProfileButtonClicked'
                }
            ]
        },
        myPaper: {
            
        }
    }
})