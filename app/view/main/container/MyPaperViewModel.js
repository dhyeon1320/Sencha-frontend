Ext.define('MyApp230111.view.main.container.MyPaperViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.my-paper-viewmodel',
    
    stores: {
        foldersstore: {
            type: 'folders-store'   
        },
        testfilesstore: {
            type: 'testfiles-store'
        }
    }
})