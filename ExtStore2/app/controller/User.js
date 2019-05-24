Ext.define('Front.controller.User', {
    extend: 'Ext.app.Controller',
    
    views: ['user.Login', 'main.Main', 'user.Profile'],

    init: function() {
        this.control({
            'login button[action=onLoginClick]': {
                click: this.onLoginClick
            },
            'button[action=onLogoffClick]': {
                click: this.onLogoffClick
            },

            'button[action=onRegisterClick]': {
                click: this.onRegisterClick
            },
        });
    },


    onLoginClick: function(button) {
        var win    = button.up('viewport'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: '/Account/TestLogin',
            params: values,
            success: function(response, options){
                var data = Ext.decode(response.responseText);
                if(data.success){
                    win.destroy();     
                    Ext.widget('main'); 
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
            url: '/Account/TestLogOff',
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
            url: '/Account/TestRegister',
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
    }
})