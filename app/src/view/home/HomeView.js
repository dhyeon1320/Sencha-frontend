Ext.define('MyApp230111.view.home.HomeView', {
    extend: 'Ext.Container',
    alias: 'widget.home',
    weighted: true,
    classCls: 'home',
    layout: {
        type: 'hbox',
        wrap: true,
        pack: 'justify'
    },
    scrollable: {
        x: false,
        y: true
    },
    bodyCls: 'home__body',
    items: {
        header: {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [
                {
                    xtype: 'button',
                    text: '나무, 수학비서1님 >',
                    userCls: 'home-user-button',
                    textAlign: 'left',
                    height: '100px'
                    // handler: 'onHomeProfileButtonClicked'
                }
            ]
        },

        myPaper: {
            xtype: 'mypaperboard',
            flex: '1 0 48%',
        },
        myAnalysis: {
            xtype: 'board',
            flex: '1 0 48%',
        },

        myDb: {
            xtype: 'board',
            responsiveConfig: {
                'width < 1751': {
                    flex: '1 0 100%'
                },
                'width >= 1751': {
                    flex: '1 0 48%'
                }
            }
        },

        notice: {
            xtype: 'board',
            responsiveConfig: {
                'width < 1751': {
                    flex: '1 0 100%'
                },
                'width >= 1751': {
                    flex: '1 0 48%'
                }
            }
        },
        
        footer: {

        }
    }
})