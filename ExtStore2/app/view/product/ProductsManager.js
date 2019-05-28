Ext.define('Front.view.product.ProductsManager', {
    extend: 'Ext.grid.Panel',
    xtype: 'productsmanager',
    store: 'Products',
    
    title: 'Products Manager',
    height: 500,
    width: 600,

    beforeShow: function () {
        this.getStore().load();
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',

        items: [
            {
                xtype: 'pagingtoolbar',
                store: 'Products',
                //dock: 'bottom',
                displayInfo: true
            },
            {
                xtype: 'button',
                text: 'Add Product',
                action: 'onAdd'
            },
        ]
    }],

    columns: [
        {
            dataIndex: 'ProductId',
            text: 'Id'
        },
        {
            dataIndex: 'Code',
            text: 'Code'  
        },
        {
            dataIndex: 'Name',
            text: 'Name'  
        },
        {
            dataIndex: 'Price',
            text: 'Price'  
        },
        {
            dataIndex: 'Category',
            text: 'Category'  
        }
    ]
});