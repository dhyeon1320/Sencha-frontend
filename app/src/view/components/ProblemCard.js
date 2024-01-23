Ext.define('MyApp230111.view.components.ProblemCard', {
    extend: 'Ext.Container',
    alias: 'widget.problem-card',
    classCls: 'problem-card',
    items: [
        {
            xtype: 'container',
            cls: 'problem-image-container',
            items: [
                {
                    xtype: 'image',
                    mode: 'img',
                    width: '100%',
                    bind: {
                        src: `{record.QuestionFileUrl}`
                    }
                }
            ]
        },
        {
            bind: {
                html: `출처 {record.Description}`
            }
        },
        {
            bind: {
                html: `유형 {record.Descriptions}`
            }
        }
    ]
})