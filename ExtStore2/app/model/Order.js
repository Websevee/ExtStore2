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

    associations: [{
        type: 'hasMany',
        model: 'Order',
        primaryKey: 'OrderId',
        foreignKey: 'Id',
        //autoLoad: true,
        associationKey: 'OrderItems',
        name: 'orderitems'
    }],
});