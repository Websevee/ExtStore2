Ext.define('Front.controller.User', {
    extend: 'Ext.app.Controller',
    models: ['User'],
    stores: ['Users'],
    views: ['user.Login', 'main.Main', 'user.Profile', 'user.UsersManager', 'user.UserEdit'],

    init: function() {
        this.control({
            'usersmanager': {
                itemdblclick: this.User
            },
            'login button[action=onLoginClick]': {
                click: this.onLoginClick
            },
            'button[action=onLogoffClick]': {
                click: this.onLogoffClick
            },
            'button[action=onRegisterClick]': {
                click: this.onRegisterClick
            },
            'button[action=onSave]': {
                click: this.onSave
            },
            'button[action=onDelete]': {
                click: this.onDelete
            },
        });
    },

    User: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
        view.setTitle('ID: ' + record.data.ProductId);
    },


    onLoginClick: function(button) {
        var win    = button.up('viewport'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: '/Account/Login',
            params: values,
            success: function(response, options){
                var data = Ext.decode(response.responseText);
                if(data.success){
                    win.destroy();     
                    Ext.widget('main'); 
                    localStorage.setItem('user', data.admin);
                }
                else{
                    Ext.Msg.alert('Ошибка','Не удалось войти');
                }
            }
        });
    },

    onLogoffClick: function(button) {
        var win    = button.up('viewport');
        Ext.Ajax.request({
            method: "POST",
            url: '/Account/Logout',
            success: function(response, options){
                var data = Ext.decode(response.responseText);
                if(data.success){
                    win.destroy();
                    Ext.widget('login');
                }
                else{
                    Ext.Msg.alert('Ошибка','Не удалось выйти из профиля');
                }
            }
        });
    },

    onRegisterClick: function(button) {
        var win    = button.up('viewport'),
            form   = button.up('form'),
            values = form.getValues();
        Ext.Ajax.request({
            method: "POST",
            url: '/Account/Register',
            params: values,
            success: function(response, options){
                var data = Ext.decode(response.responseText);
                if(data.success){
                    win.destroy();
                    Ext.widget('main');
                }
                else{
                    Ext.Msg.alert('Ошибка','Не удалось создать профиль');
                }
            }
        });
    },
})