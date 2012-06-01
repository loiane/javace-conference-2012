Ext.define('ExtMVC.controller.Application', {
    extend: 'Ext.app.Controller',
    
    models: ['Contact'],

   	stores: ['Contacts'],
   	
   	views: [
   	        'contacts.MapPanel', 
   	        'contacts.StockGrid',
   	        'contacts.StockForm',
   	        'contacts.EditForm'
   	    ],
   	    
   	 refs: [{
         ref: 'stockForm',
         selector: 'form'
     },{
         ref: 'contatoGrid',
         selector: 'grid'
     },{
         ref: 'map',
         selector: 'mappanel gmappanel'
     },{
         ref: 'editForm',
         selector: 'editform form'
     },{
         ref: 'file',
         selector: 'filefield'
     }],
   	
   	init: function() {
   		this.control({
   			'stockgrid': {
        		selectionchange: this.selectionchange,
        		viewready: this.onViewReady
        	},
        	'stockgrid dataview': {
        		itemdblclick: this.editarContato
        	},
        	'stockgrid button[action=add]': {
            	click: this.editarContato
            },
            'stockgrid button[action=delete]': {
                click: this.deleteContato
            },
            'editform button[action=save]': {
                click: this.saveContato
            }
   		});
   	},
   	
   	onViewReady: function(grid) {
   		
       // grid.getSelectionModel().select(1);
    },
   	
   	selectionchange: function(model, records){

        var form = this.getStockForm().getForm();

        if (records[0]) {
            rec = records[0];
            
            console.log();
            
            if (!form) {
                form = this.getStockForm().getForm();
            } 
            
            form.loadRecord(rec);

            var address = rec.get('city') + ', ' + rec.get('country');
            
            this.getMap().lookupCode(address);
            
            Ext.getDom('pic').src = 'resources/images/headshots/'+ rec.get('headshot');
            
        }    
    },
    
    editarContato: function(grid, record) {
    	
        var edit = Ext.create('ExtMVC.view.contacts.EditForm').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    updateContato: function(values) {

         var contatosStore = Ext.getStore("Contacts");
         
 		if (values.id > 0){
 			record.set(values);
 		} else{
 			record = Ext.create('ExtMVC.model.Contact');
 			values.id = 0;
 			record.set(values);
 			contatosStore.add(record);
 		}
         
 		//win.close();
 		Ext.ComponentQuery.query('editform')[0].close();
         contatosStore.sync();
     },
    
    deleteContato: function(button) {
    	
    	var grid = this.getContatoGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        contatosStore = Ext.getStore("Contacts");

	    contatosStore.remove(record);
	    contatosStore.sync();

        //faz reload para atualziar
        contatosStore.load();
    },
    
    saveContato: function(button) {

        var form   = this.getEditForm().getForm();
    	 
    	 if(form.isValid()){
    		 
    		 values = form.getValues();
    		 
    		 var headshot = this.getFile().value.split("\\");
    		 headshot = headshot[headshot.length-1];
    		 values.headshot = headshot;
    		 var record = Ext.create('ExtMVC.model.Contact');
  			 record.set(values);
  			 form.loadRecord(record);
    		 
    		 this.updateContato(values);
    		 
    		 
             form.submit({
                 url: 'contacts/upload',
                 waitMsg: 'Uploading your photo...',
                 success: function(form, action) {
                     Ext.Msg.alert('Success', 'Upload feito com sucesso');
                     Ext.getDom('pic').src = 'resources/images/headshots/'+ headshot;
                  },
                  failure: function(form, action) {
                      Ext.Msg.alert('Failed', 'Alguma coisa deu errada');
                  }
             });
         }
    }
});    