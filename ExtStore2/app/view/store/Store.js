Ext.define('Front.view.store.Store', {
    extend: 'Ext.grid.Panel',
    xtype: 'store',
    store: 'Products',
    
    title: 'Store',
    height: 500,

    beforeShow: function () {
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