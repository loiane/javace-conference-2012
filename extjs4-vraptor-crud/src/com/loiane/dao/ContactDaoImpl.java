package com.loiane.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import br.com.caelum.vraptor.ioc.Component;

import com.loiane.model.Contact;

@Component
public class ContactDaoImpl implements ContactDao {
	
	private final Session session;
	
	public ContactDaoImpl(Session session) {
		super();
		this.session = session;
	}

	
	@SuppressWarnings("unchecked")
	public List<Contact> list() {
		
		/*List<Contact> list = new ArrayList<Contact>();
		Contact c = new Contact();
		
		c.setId((long) 1);
		c.setCity("Sao Paulo");
		c.setCountry("Brazil");
		c.setFirstName("Loiane");
		c.setLastName("Groner");
		c.setHeadshot("loiane.png");
		
		list.add(c);
		
		return list;*/
		
		return session.createCriteria(Contact.class).list();
	}


	public Contact create(Contact contact) {
		
		Transaction tx = this.session.beginTransaction();  
        this.session.save(contact);  
        tx.commit();  
        
        return contact;
	}


	public void update(Contact contact) {
		
		Transaction tx = this.session.beginTransaction();  
        this.session.update(contact);  
        tx.commit();
		
	}


	public void delete(Contact contact) {
		
		Transaction tx = this.session.beginTransaction();  
        this.session.delete(contact);  
        tx.commit(); 
		
	}

}
