Ext.define('MyApp230111.view.home.MyPaperBoardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mypaperboardviewmodel',

    stores: {
        testfilesstore: {
            type: 'testfiles-store',
            autoLoad: true,
            filters
        }
    }
})