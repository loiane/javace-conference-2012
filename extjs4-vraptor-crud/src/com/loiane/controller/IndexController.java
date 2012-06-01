package com.loiane.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;

@Resource
public class IndexController {

	@Path("/")
	public void index() {}
}
