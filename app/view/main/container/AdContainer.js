Ext.define('MyApp230111.view.main.container.AdContainer', {
    extend: 'Ext.Container',
    alias: 'widget.ad-container',
    cls: 'ad-container',
    items: [
        {
            html: 'advertisement',
            cls: 'ad-content'
        }
    ]
})