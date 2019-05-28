Ext.define('Front.view.user.Profile', {
    extend: 'Ext.container.Container',
    xtype: 'profile',

    title: 'Profile',

    autoscroll: true,
    //overflowY: 'scroll',
    height: 1500,

    beforeShow: function () {
        var comp = this;

        Ext.Ajax.request({
            type: 'ajax',
            method: 'GET',
            url: 'Account/IsAuthenticated',
            
            success: function(response, options){
                var data = Ext.decode(response.responseText); // декодируем полученные json-объекты
                // устанавливаем для каждого свойства декодированное значение
                comp.getComponent('txtName').setText(data.user.Email + ' | Roles: ' + data.user.Roles);

                if (data.admin) 
                {
                    comp.getComponent('productsmanager').show();
                    comp.getComponent('ordersmanager').show();
                    comp.getComponent('usersmanager').show();
                }
                    
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
            xtype: 'productsmanager',
            title: 'Products Manager',
            itemId: 'productsmanager',
            collapsible:true,
            collapsed: true,
            
            hidden: true
        }, {
            xtype: 'ordersmanager',
            title: 'Orders Manager',
            itemId: 'ordersmanager',
            collapsible:true,
            collapsed: true,

            hidden: true
        }, {
            xtype: 'usersmanager',
            title: 'Users Manager',
            itemId: 'usersmanager',
            collapsible:true,
            collapsed: true,
            
            hidden: true
        }
    ]

})