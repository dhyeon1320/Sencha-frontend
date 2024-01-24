Ext.define('MyApp230111.view.home.Board', {
    extend: 'Ext.Container',
    alias: 'widget.board',
    baseCls: 'board',
    // container의 기본 구성요소 정의
    config: {
        title: null,
        shortcutText: '바로가기 >',
        shortcut: null,
        shortcutAction: null,
        store: null
    },
    // 각 구성요소마다 필요한 함수 정의
    updateTitle: function (title) {
        this.title.setHtml(title);
    },
    updateShortcutText: function (value) {
        this.shortcut.setHtml(value);
    },
    updateStore: function (store) {
        this.getViewModel().set('store', store);
    },
    initialize: function() {
        this.callParent();
        this.shortcut.on('tap', this.action, this);
    },
    doDestroy: function() {
        this.shortcut.un('tap', this.action, this);
        this.callParent();
    },
    classCls: 'board',
    template: [
        {
            tag: 'div',
            cls: 'board__header',
            children: [
                {
                    reference: 'title',
                    cls: 'board__title',
                    tag: 'h3',
                },
                {
                    reference: 'shortcut',
                    cls: 'board__shortcut',
                    tag: 'div'
                }
            ]
        }
    ],

    privates: {
        action : function() {
            if (this.getShortcutAction()) {
                Ext.callback(this.getShortcutAction(), this);
            } else if (this.getShortcut()) {
                this.lookupController().redirectTo(this.getShortcut());
            }
        }
    }
})