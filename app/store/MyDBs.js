Ext.define('MyApp230111.store.MyDBs', {
    extend: 'Ext.data.Store',
    alias: 'store.mydbs-store',
    storeId: 'mydbs-store',
    model: 'MyApp230111.model.MyDB',
    proxy: {
        type: 'ajax',
        url: 'app/data/MyDBs.json',
        reader: {
            type: 'json',
        }
    },
    sorters: [{
        property: 'title',
        direction: 'DESC'
    }],

    grouper: {
        property: 'progress',
        // groupFn: function(progress) {
        //     switch(progress) {
        //         case 0:
        //             return 'PDF 검수중';
        //             break;
        //         case 1:
        //             return '결제 가능';
        //             break;
        //         case 2:
        //             return 'DB화 진행중';
        //             break;
        //         case 3:
        //             return 'DB화 완료 및 추가결제 가능';
        //             break;
        //         case 4:
        //             return 'DB화 완료';
        //             break;
        //     }
        // }
    },
    autoLoad: true
})