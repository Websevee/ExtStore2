Ext.define('Front.store.Products', {
    extend: 'Ext.data.Store',
    model: 'Front.model.Product',

    storeId: 'ProductsStore',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'Product/GetData',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});