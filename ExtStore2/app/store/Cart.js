Ext.define('Front.store.Cart', {
    extend: 'Ext.data.Store',
    model: 'Front.model.CartItem',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'Order/GetCart',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});