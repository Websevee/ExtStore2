Ext.define('Front.store.AllOrders', {
    extend: 'Ext.data.Store',
    model: 'Front.model.Order',

    autoLoad: true,
    autoSync: true,
    pageSize: 15,

    proxy: {
        type: 'ajax',
        url: 'Order/GetOrders',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});