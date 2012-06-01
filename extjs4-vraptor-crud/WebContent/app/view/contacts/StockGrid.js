Ext.define('ExtMVC.view.contacts.StockGrid', {
	extend: 'Ext.grid.Panel',
	alias : 'widget.stockgrid',

	id: 'company-form',
    flex: 0.60,
    title:'Contacts',

    initComponent: function() {
    	
    	this.store = 'Contacts';

	    this.columns= [
	        {
	            text   : 'First Name',
	            flex: 1,
	            sortable : true,
	            dataIndex: 'firstName'
	        },
	        {
	            text   : 'Last Name',
	            width    : 150,
	            sortable : true,
	            dataIndex: 'lastName',
	            align: 'right'
	        },
	        {
	            text   : 'Twitter',
	            width    : 150,
	            sortable : true,
	            dataIndex: 'twitter',
	            align: 'right'
	        }
	    ];
	    
	    this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
        }];

		this.callParent(arguments);
    }    
});