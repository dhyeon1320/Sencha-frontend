Ext.define('MyApp230111.view.home.MyAnalysisPaperBoardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.myanalysispaperboardviewmodel',

    stores: {
        myanalyses: {
            type: 'myanalyses-store'
        },
        myanalysesediting: {
            source: 'myanalyses-store',
            filters: [record => !record.get('isComplete')],
            sorters: [
                {
                    property: 'createdAt',
                    direction: 'DESC'
                }
            ]
        },
        myanalysescompleted: {
            source: 'myanalyses-store',
            filters: [record => record.get('isComplete')],
            sorters: [
                {
                    property: 'completedAt',
                    direction: 'DESC'
                }
            ]
        }
    }
})