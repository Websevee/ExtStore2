Ext.define('Front.view.user.Profile', {
    extend: 'Ext.container.Container',
    xtype: 'profile',

    title: 'Profile',
    //layout: 'fit',

    beforeShow: function () {
        var comp = this;

        Ext.Ajax.request({
            type: 'ajax',
            method: 'GET',
            url: 'Account/NowUser',
            
            success: function(response, options){
                var data = Ext.decode(response.responseText); // декодируем полученные json-объекты
                // устанавливаем для каждого свойства декодированное значение
                comp.getComponent('txtName').setText(data.user.Email);

                if (data.admin) 
                    comp.getComponent('list').show()
            },
            failure: function(response, options){
                alert("Ошибка: " + response.statusText);
            }
        }); 
    },

    defaults: {
        margin: 10,
    },
    
    items: [
        {
            xtype: 'button',
            text: 'LogOff',
            padding: 10,
            action: 'onLogoffClick',
            dock: 'top'
        }, {
            xtype: 'label',
            itemId: 'txtName',
            margin: '10'
        }, {
            xtype: 'listmanager',
            title: 'StoreManager',
            itemId: 'list',
            
            hidden: true
        }
    ]

})