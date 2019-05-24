Ext.define('Front.view.user.Login', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',

    initComponent: function() {
        this.items = [
            {
            xtype: 'tabpanel',
            width: 350,
            items: [
                {
                    xtype: 'form',
                    title: 'Login',
                    bodyPadding: 10,
    
                    items: [
                        {
                            xtype: 'textfield',
                            name : 'Email',
                            fieldLabel: 'Email'
                        },{
                            xtype: 'textfield',
                            name : 'Password',
                            fieldLabel: 'Password',
                            inputType: 'password'
                        }, {
                            xtype: 'button',
                            text: 'Login',
                            action: 'onLoginClick'
                        }
                    ]
                },{
                    xtype: 'form',
                    title: 'Register',
                    bodyPadding: 10,
    
                    items: [
                        {
                            xtype: 'textfield',
                            name : 'Email',
                            fieldLabel: 'Email',
                            inputType: 'email'
                        }, {
                            xtype: 'textfield',
                            name : 'Password',
                            fieldLabel: 'Password',
                            inputType: 'password'
                        }, {
                            xtype: 'textfield',
                            name : 'PasswordConfirm',
                            fieldLabel: 'PasswordConfirm',
                            inputType: 'password'
                        }, {
                            xtype: 'numberfield',
                            name : 'Year',
                            fieldLabel: 'Year',
                            inputType: 'int'
                        }, {
                            xtype: 'button',
                            text: 'Register',
                            action: 'onRegisterClick'
                        }
                    ]
                },


            ]
        }
           
        ];
 
        this.callParent(arguments);
    }

})