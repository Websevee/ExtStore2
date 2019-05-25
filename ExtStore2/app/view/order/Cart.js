Ext.define('Front.view.order.Cart', {
    extend: 'Ext.grid.Panel',
    xtype: 'cart',
    store: 'Cart',
    
    title: 'Cart',
    height: 500,

    beforeShow: function () {
        this.getStore().load();
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',

        items: [
            {
                xtype: 'button',
                text: 'Create Order',
                action: 'onCreateOrder'
            }
        ]
    }],

    columns: [
        {
            dataIndex: 'CartItemId',
            text: 'CartItemId'
        },
        {
            dataIndex: 'ProductId',
            text: 'ProductId'  
        },
        {
            dataIndex: 'Count',
            text: 'Count'  
        }
    ]
});