Ext.define('Front.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout: 'fit',
    
    initComponent: function() {
        this.items = {
            dockedItems: [
                {
                    dock: 'top',
                    xtype: 'tabpanel',

                    items: [
                        {
                            xtype: 'store',
                        }, {
                            xtype: 'cart',
                        }, {
                            xtype: 'profile'
                        }
                    ]
                },{
                    dock: 'bottom',
                    title: 'Состояние системы + состояния раздела + сообщения'
                },

            ]
        };
        
        this.callParent();
    }
});