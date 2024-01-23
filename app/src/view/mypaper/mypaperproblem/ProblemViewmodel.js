Ext.define('MyApp230111.view.mypaper.mypaperproblem.ProblemViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.problem-viewmodel',
    
    stores: {
        problemsstore: {
            type: 'problems-store'
        }
    }
})