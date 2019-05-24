Ext.define('Front.store.CartItems', {
    extend: 'Ext.data.Store',
    model: 'Front.model.CartItem',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: '/ShoppingCart/',
        reader: {
            type: 'json',
            root: 'CartItems',
            successProperty: 'success'
        }
    }
});