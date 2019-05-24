Ext.define('Front.view.cart.Cart', {
    extend: 'Ext.grid.Panel',
    xtype: 'cart',
    store: 'CartItems',
    
    title: 'My Cart',
    height: 500,

    beforeShow: function () {
        this.getStore().load();
    },

    columns: [
        {
            dataIndex: 'ProductId',
            text: 'ProductId'
        },
        {
            dataIndex: 'Count',
            text: 'Count'  
        }
    ]
})