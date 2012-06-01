package com.loiane.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.commons.io.IOUtils;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.interceptor.multipart.UploadedFile;
import br.com.caelum.vraptor.util.extjs.ExtJSJson;
import br.com.caelum.vraptor.view.HttpResult;
import br.com.caelum.vraptor.view.Results;

import com.loiane.dao.ContactDao;
import com.loiane.model.Contact;

@Resource
public class ContactsController {

	private final Result result;
	private final ContactDao contactDao;
	
	public ContactsController(Result result, ContactDao contactDao) {
		this.result = result;
		this.contactDao = contactDao;
	}
	
	public void list() {
		result.use(ExtJSJson.class).from(this.contactDao.list()).success(true).serialize();
	}
	
	public void listJsonP(String callback) {
		result.use(Results.jsonp()).withCallback(callback).from(this.contactDao.list()).serialize();
	}
	
	@Post
	@Consumes("application/json")
	public void create(Contact data){
		this.contactDao.create(data);
		result.use(ExtJSJson.class).from(data).success(true).serialize();
	}
	
	@Post
	public void update(Contact data){
		this.contactDao.update(data);
		result.use(ExtJSJson.class).from(data).success(true).serialize();
	}
	
	@Post
	public void delete(Contact data){
		this.contactDao.delete(data);
		result.use(ExtJSJson.class).from(data).success(true).serialize();
	}
	
	@Post
	public void upload(UploadedFile file) throws FileNotFoundException, IOException{
		
		File picture = new File("/Users/loiane/development/javace/extjs4-vraptor-crud/WebContent/resources/images/headshots/"+file.getFileName());    
	    IOUtils.copyLarge(file.getFile(), new FileOutputStream(picture));
	    
	    //result.use(Results.json()).withoutRoot().from(new ExtJSSuccess(true)).serialize();
	    
	    result.use(HttpResult.class).addHeader("Content-Type", "text/html").body("{'success':true}");
	}
}
