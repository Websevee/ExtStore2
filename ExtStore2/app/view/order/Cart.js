Ext.define('Front.view.order.Cart', {
    extend: 'Ext.grid.Panel',
    xtype: 'cart',
    store: 'Cart',
    
    title: 'Cart',
    height: 500,

    beforeRender: function () {
        this.getStore().load();
        console.log(this.getStore().data.items);
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