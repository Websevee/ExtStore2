Ext.define('Front.view.user.UserEdit', {
    extend: 'Ext.window.Window',
    xtype: 'useredit',
 
    title: 'Продукт',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [
                    {
                        xtype: 'displayfield',
                        name : 'Email',
                        fieldLabel: 'Email'
                    },{
                        xtype: 'displayfield',
                        name : 'Name',
                        fieldLabel: 'Name'
                    },{
                        xtype: 'displayfield',
                        name : 'Address',
                        fieldLabel: 'Address'
                    },{
                        xtype: 'displayfield',
                        name : 'Code',
                        fieldLabel: 'Code'
                    },{
                        xtype: 'displayfield',
                        name : 'Disount',
                        fieldLabel: 'Disount'
                    }
                ]
            }];
        this.buttons = [
            {
                text: 'Сохранить',
                action: 'onSave'
            },
            {
                text: 'Удалить',
                scope: this,
                action: 'onDelete'
            }
        ];
 
        this.callParent(arguments);
    }
});