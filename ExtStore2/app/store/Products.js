Ext.define('Front.store.Products', {
    extend: 'Ext.data.Store',
    model: 'Front.model.Product',

    //autoLoad: true,
    autoSync: true,
    pageSize: 15,

    proxy: {
        type: 'ajax',
        url: 'Product',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});