Ext.application({
    name: 'Front',
    
    //autoCreateViewport: true,
    
    models: ['Product'],    
    stores: ['Products'],
    controllers: ['User'],

    controllers: ['User', 'Manager', 'Store'],
    

    launch: function () {
        Ext.Ajax.request({
            url: '/Account/IsAuthenticated',
            success: function(response, options){
                var data=Ext.decode(response.responseText);

                if(data.success){
                    console.log('Main', data.user);
                    Ext.widget('main');

                    localStorage.setItem('user', data.user);
                }
                else{
                    console.log('Login', data);
                    Ext.widget('login');
                }
            },
            failure: function(message, message2){
                console.log('Login', message, message2);
                Ext.widget('login');
            }

        });
    }
});