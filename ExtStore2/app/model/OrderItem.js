Ext.define('Front.model.OrderItem', {
    extend: 'Ext.data.Model',
    fields: ['Id', 'OrderId', 'ProductId', 'ItemsCount', 'ItemPrice'],

    associations: [{
        type: 'belongsTo',
        model: 'Order',
        primaryKey: 'Id',
        foreignKey: 'OrderId',
        //autoLoad: true,
        associationKey: 'Order',
    }],
});