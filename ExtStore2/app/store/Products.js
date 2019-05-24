Ext.define('Front.store.Products', {
    extend: 'Ext.data.Store',
    model: 'Front.model.Product',
    
    storeId: 'ProductsStore',

    autoLoad: true,
    autoSync: true,
    //pageSize: 10,

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