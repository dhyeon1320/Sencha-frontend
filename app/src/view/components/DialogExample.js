Ext.define('MyApp230111.view.components.DialogExample', {
    extend: 'Ext.Dialog',
    alias: 'widget.dialog-example',
    closable: true,
    items: [
        {
            bind: {
                data: {
                    name: '{name}',
                    student: '{student}'
                }
            },
            tpl: `
                <div>안녕하세요 저의 이름은 {name} 입니다.</div>
                <div>지금 {student}님을 알려드리고 있습니다.</div>
            `
        }
    ],
    
});