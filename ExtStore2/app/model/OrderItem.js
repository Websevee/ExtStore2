Ext.define('Front.model.OrderItem', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'OrderId', 'ProductId', 'ItemsCount', 'ItemPrice'],

    belongsTo: 'Order'
});