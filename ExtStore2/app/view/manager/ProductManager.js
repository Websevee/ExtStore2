Ext.define('Front.view.manager.ProductManager', {
    extend: 'Ext.window.Window',
    xtype: 'productmanager',
 
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
        this.dockedItems=[{
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Создать',
                    action: 'create'
                },
                {
                    text: 'Очистить',
                    action: 'clear'
                }
            ]
        }];
        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },{
                text: 'Удалить',
                scope: this,
                action: 'delete'
            }
        ];
 
        this.callParent(arguments);
    }
});