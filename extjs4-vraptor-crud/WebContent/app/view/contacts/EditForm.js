Ext.define('ExtMVC.view.contacts.EditForm', {
	extend: 'Ext.window.Window',
	alias : 'widget.editform',

	title: 'Company data',
	layout: 'fit',
    autoShow: true,
    width: 280,

    
    items: [{
       xtype: 'form',
       padding: '5 5 0 5',
       border: false,
       style: 'background-color: #fff;',
       
       fieldDefaults: {
           anchor: '100%',
           labelAlign: 'left',
           allowBlank: false,
           combineErrors: true,
           msgTarget: 'side'
       },
       
       items: [
				{
                margin: '5',
                xtype: 'fieldset',
                flex: 1,
                title:'Information',
                defaults: {
                    width: 240,
                    labelWidth: 90
                },
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'firstName',
                    name: 'firstName',
                    xtype: 'textfield'
                },{
                    fieldLabel: 'lastName',
                    name: 'lastName'
                },{
                    fieldLabel: 'twitter',
                    name: 'twitter'
                }]
            },{
                margin: '5',
                xtype: 'fieldset',
                flex: 1,
                title:'Telefone',
                defaults: {
                    width: 240,
                    labelWidth: 90
                },
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'telephone',
                    name: 'telephone',
                    xtype: 'textfield'
                }]
            },{
                margin: '5',
                xtype: 'fieldset',
                flex: 1,
                title:'Address',
                defaults: {
                    width: 240,
                    labelWidth: 90
                },
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'city',
                    name: 'city',
                    xtype: 'textfield'
                },{
                    fieldLabel: 'state',
                    name: 'state'
                },{
                    fieldLabel: 'country',
                    name: 'country'
                },,{
                    fieldLabel: 'headshot',
                    name: 'headshot'
                }]
            },{
                xtype: 'filefield',
                id: 'file',
                emptyText: 'Select an image',
                fieldLabel: 'Photo',
                name: 'file',
                buttonText: '',
                buttonConfig: {
                    iconCls: 'upload-icon'
                }
            }
           ]

    }],
    dockedItems : [{
        xtype: 'toolbar',
        dock: 'bottom',
        id:'buttons',
        ui: 'footer',
        items: ['->', {
            iconCls: 'icon-save',
            text: 'Salvar',
            action: 'save'
        },{
            iconCls: 'icon-reset',
            text: 'Cancelar',
            scope: this,
            handler: this.close
        }]
    }]
});
