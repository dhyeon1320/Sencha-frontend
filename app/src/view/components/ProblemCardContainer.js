Ext.define('MyApp230111.view.components.ProblemCardContainer', {
    extend: 'Ext.Container',
    alias: 'widget.problem-card-container',
    cls: 'problem-card-container',
    items: [
        {
            xtype: 'list',
            bind: {
                store: `{problemsstore}`
            },
            itemConfig: {
                xtype: 'problem-card',
                cls: 'problem-cards',
                viewModel: true
            }
        }
    ]
})