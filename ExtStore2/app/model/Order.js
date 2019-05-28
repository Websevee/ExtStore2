Ext.define('Front.model.Order', {
    extend: 'Ext.data.Model',
    fields: 
    [
        { name: 'OrderId' }, 
        { name: 'UserId', type: 'string' }, 
        { name: 'OrderDate' }, 
        { name: 'ShipmentDate' }, 
        { name: 'OrderNumber' }, 
        { name: 'Status' }
    ],

    validations: [
        {type: 'inclusion', field: 'Status',   list: ['New', 'Progress', 'End']},
    ],

    hasMany: {model: 'OrderItem', name: 'orderitems'}
});