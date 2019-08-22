amiApp.company_list_controller = function(targetEl){
	var self = this;
	self.activeStage = "company";
	location.hash = "#org";
	targetEl.innerHTML = "";

	// Create elements representing each company belonging to the selected industry.
	for (var i = 0; i < self.request.industry.companies.length; i++) {
		el = self.createFromTemplate("company_select_template", self.request.industry.companies[i]);
		// If the user has gone back a stage, make sure to highlight the company they had selected
		if(self.request.industry.companies[i] === self.request.company){
			el.classList.add("btn-media-select");
		}
		// Clicking a company element will result in selecting that company for the request.
		el.onclick = function(){
			var id = this.querySelector('*[ami_template_value_container="id"]').innerHTML;
			self.selectCompany(id);
		}
		targetEl.appendChild(el);
	}
	// Back button
	self.stages["company"].backEl.onclick = function(){
		if(self.stages["industry"].enabled){
			self.showStage("industry");
		}
	}
	// If a company has been previously selected, ensure that the next button is active, otherwise disable it.
	if(self.request.hasOwnProperty("company")){
		self.stages["company"].nextEl.classList.remove("btn-disabled");
		self.stages["company"].nextEl.classList.add("btn-primary");
	}
	else{
		self.stages["company"].nextEl.classList.remove("btn-primary");
		self.stages["company"].nextEl.classList.add("btn-disabled");
	}
	// If the next button is active, you can use it to move to the next stage.
	self.stages["company"].nextEl.onclick = function(){
		if(self.stages["information"].enabled){
			self.showStage("information");
		}
	}
}

amiApp.selectCompany = function(company_id){
	var self = this;
	for (var i = 0; i < self.request.industry.companies.length; i++) {
		// Reconcile the company ID with the full company object that's part of the AMI request data structure, and assign that company object to the request.
		if(self.request.industry.companies[i].id === company_id){
			self.request.company = self.request.industry.companies[i];
			// Enable the next stage and move the user to it.
			self.enableStage("information");
			self.showStage("information");
			return self.request.company;
		}
	}
	
	new Error("Company not found");
}