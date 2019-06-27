Ext.define('Front.view.product.Store', {
    extend: 'Ext.grid.Panel',
    xtype: 'store',
    store: 'Products',
    
    title: 'Store',
    height: 500,

    beforeRender: function () {
        this.getStore().load();
    },
    
    columns: [
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
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Products',
        dock: 'bottom',
        displayInfo: true
    }]
});