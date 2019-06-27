Ext.define('Front.model.CartItem', {
    extend: 'Ext.data.Model',
    fields: ['CartItemId', 'ProductId', 'Count'],

    associations: [{
        type: 'hasOne',
        model: 'Front.model.Product',
        primaryKey: 'CartItemId',
        foreignKey: 'ProductId',
        autoLoad: true,
        associationKey: 'Product',
        //name: 'orderitems'
    }],
});