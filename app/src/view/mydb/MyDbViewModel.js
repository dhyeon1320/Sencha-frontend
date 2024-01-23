Ext.define('MyApp230111.view.mydb.MyDbViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.my-db-viewmodel',
    
    stores: {
        foldersstore: {
            type: 'folders-store'   
        },
        mydbsstore: {
            type: 'mydbs-store'
        }
    }
})