package com.loiane.dao;

import java.util.List;

import com.loiane.model.Contact;

public interface ContactDao {

	List<Contact> list();
	
	Contact create(Contact contact);
	
	void update(Contact contact);
	
	void delete(Contact contact);
}
