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