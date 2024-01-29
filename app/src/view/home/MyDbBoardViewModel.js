Ext.define('MyApp2301111.view.home.MyDbBoardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mydbboardviewmodel',
    stores: {
        mydbs: {
            type: 'mydbs-store',
            autoLoad: true,
            sorters: [
                {
                    property: 'updatedAt',
                    direction: 'DESC'
                }
            ],
        },

        mydbsempty: {
            source: 'mydbs-store',
            filters: [
                {
                    property: 'progress',
                    value: -1
                }
            ],
        },
        mydbspdfanalyzing: {
            source: 'mydbs-store',
            filters: [
                {
                    property: 'progress',
                    value: 0
                }
            ],
        },
        mydbspurchasable: {
            source: 'mydbs-store',
            filters: [
                item => item.get('progress') == 1 || item.get('progress') == 3
            ],
        },
        mydbsdbinprogress: {
            source: 'mydbs-store',
            filters: [
                {
                    property: 'progress',
                    value: 2
                }
            ],
        },
        mydbsdbcomplete: {
            source: 'mydbs-store',
            filters: [
                item => item.get('progress') == 4 && !item.get('isPD')
            ],
        },
        mydbsdbpd: {
            source: 'mydbs-store',
            filters: [
                {
                    property: 'isPD',
                    value: true
                }
            ],
        }

    }
})