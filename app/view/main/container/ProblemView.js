Ext.define('MyApp230111.view.main.container.ProblemView', {
    extend: 'Ext.Container',
    alias: 'widget.my-paper-view/7521',
    cls: 'my-paper-view/7521',
    scrollable: true,
    height: '50%',
    viewModel: {
        type: 'problem-viewmodel'
    },
    items: [
        {
            xtype: 'ad-container'
        },
        {
            xtype: 'container',
            cls: 'problem-view-container',
            layout: 'hbox',
            defaults: {
                cls: 'problem-button'
            },
            items: [
                {
                    html: '내 문제지'
                },
                {
                    xtype: 'button',
                    text: '작업공간',
                    iconCls: 'x-fa fa-folder',
                },
                {
                    html: '>'
                },
                {
                    xtype: 'button',
                    text: 'jb'
                }
            ]
        },
        {
            xtype: 'problem-card-container'
        }
    ]
})