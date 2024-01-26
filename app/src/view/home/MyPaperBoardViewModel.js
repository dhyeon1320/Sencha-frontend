Ext.define('MyApp230111.view.home.MyPaperBoardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mypaperboardviewmodel',

    stores: {
        testfilesstore: {
            type: 'testfiles-store',
            autoLoad: true
        },
        testfilesediting: {
            source: 'testfiles-store',
            filters: [record => record.data.done == '편집중'],
            sorters: [
                {
                    property: 'makingdate',
                    direction: 'DESC'
                }
            ],
            storeId: 'testfilesediting'
        },
        testfilescompleted: {
            source: 'testfiles-store',
            filters: [record => record.get('completedate')],
            sorters: [
                {
                    property: 'completedate',
                    direction: 'DESC'
                }
            ],
            storeId: 'testfilescompleted'
        }
    }
})