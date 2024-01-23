Ext.define('MyApp230111.view.components.AdContainer', {
    extend: 'Ext.Container',
    alias: 'widget.ad-container',
    cls: 'ad-container',
    config: {
        /**
         * @cfg enableTools {bool} : 특정 툴을 사용하도록 합니다. 기본값 : false 
         */
        enableTools: false
    },
    items: [
        {
            html: 'advertisement',
            cls: 'ad-content'
        }
    ],
    privates: {
        updateEnableTools: function (enableTools) {
            if (enableTools) {
                this.add({
                    html: 'Hello'
                })
            }
        }
    }
})