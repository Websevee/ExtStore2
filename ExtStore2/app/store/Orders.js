Ext.define('Front.store.Orders', {
    extend: 'Ext.data.Store',
    model: 'Front.model.Order',

    //autoLoad: true,
    autoSync: true,
    //pageSize: 10,

    proxy: {
        type: 'ajax',
        url: 'Order/GetUserOrders',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    },
/*
    filters: [{
        property: 'Status',
        value: 'New'
    }]*/
});