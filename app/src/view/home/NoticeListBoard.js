Ext.define('MyApp230111.view.home.NoticeListBoard', {
    extend: 'MyApp230111.view.home.Board',
    alias: 'widget.noticelistboard',
    viewModel: true,
    items: [
        {
            xtype: 'noticegridmini',
            bind: {
                store: `{store}`
            },
            listeners: {
                childtap: function (grid, location) {
                    grid.up('board').fireEvent('childtap', ...arguments);
                }
            },
            height: 168,
            rowCount: 4
        }
    ],

    reset: function () {
        debugger
        const selectable = this.down('noticegridmini').getSelectable();

        selectable.deselectAll();
    }
})