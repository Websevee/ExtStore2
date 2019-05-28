Ext.define('Front.view.product.ProductEdit', {
    extend: 'Ext.window.Window',
    xtype: 'productedit',
 
    title: 'Продукт',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'Code',
                        fieldLabel: 'Code'
                    },{
                        xtype: 'textfield',
                        name : 'Name',
                        fieldLabel: 'Название'
                    },{
                        xtype: 'textfield',
                        name : 'Price',
                        fieldLabel: 'Price'
                    },{
                        xtype: 'textfield',
                        name : 'Category',
                        fieldLabel: 'Category'
                    },
                ]
            }];
        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Очистить',
                action: 'clear'
            },
            {
                text: 'Удалить',
                scope: this,
                action: 'delete'
            }
        ];
 
        this.callParent(arguments);
    }
});