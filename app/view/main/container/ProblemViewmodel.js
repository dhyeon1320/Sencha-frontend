Ext.define('MyApp230111.view.main.container.ProblemViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.problem-viewmodel',
    
    stores: {
        problemsstore: {
            type: 'problems-store'
        }
    }
})