var AMIdata = {
	"request_subject_line": "Formal request for access to my personal information",
	"request_pdf_filename": "Formal_request_for_access_to_my_personal_information.pdf",
	"industries": [
		{
			"id": "telco",
			"name": "Telecommunications",
			"icon": "img/industries/telecommunications.svg",
			"description": "Your phone call records, web browsing history, geolocation, and device identifiers."
		},
		{
			"id": "fitness",
			"name": "Fitness Trackers",
			"icon": "img/industries/fitness-trackers.svg",
			"description": "Your heartbeat, sleeping patterns, diet, weight, walking habits, and general health."
		},
		{
			"id": "dating",
			"name": "Dating Applications",
			"icon": "img/industries/dating-applications.svg",
			"description": "Your personality traits, sexual preferences, dating history, and other lifestyle information."
		}
	],
	"companies": [
		{
			"name": "Telco1",
			"id": "telco1",
			"logo": "https://api.accessmyinfo.org/wp-content/uploads/2016/05/meetville-150x150.png",
			"contact": {
				"title": "Privacy Officer, Telco1",
				"has_mail": false,
				"has_email": true,
				"email": "telco1@telco1.ca"
			},
			"industry": "telco"
		},
		{
			"name": "Telco2",
			"id": "telco2",
			"logo": "https://api.accessmyinfo.org/wp-content/uploads/2016/05/meetville-150x150.png",
			"contact": {
				"title": "Privacy Officer, Telco2",
				"has_mail": true,
				"has_email": true,
				"address1": "123 fake street",
				"address2": "Unit 10",
				"city": "Toronto",
				"region": "Ontario",
				"postalcode": "H0H0H0",
				"country": "Canada",
				"email": "privacy@telco2.ca"
			},
			"industry": "telco"
		},
		{
			"name": "Fitness1",
			"id": "fitness1",
			"logo": "https://api.accessmyinfo.org/wp-content/uploads/2016/05/meetville-150x150.png",
			"contact": {
				"title": "Privacy Officer, Fitness1",
				"has_mail": false,
				"has_email": true,
				"email": "fitness1@tfitness1.ca"
			},
			"industry": "fitness"
		},
		{
			"name": "dating1",
			"id": "dating1",
			"logo": "https://api.accessmyinfo.org/wp-content/uploads/2016/05/meetville-150x150.png",
			"contact": {
				"title": "Privacy Officer, Dating1",
				"has_mail": true,
				"has_email": false,
				"address1": "123 fake street",
				"address2": "Unit 10",
				"city": "Toronto",
				"region": "Ontario",
				"postalcode": "H0H0H0",
				"country": "Canada"
			},
			"industry": "dating"
		},
	],
	"info_categories": [
		{
			"name": "Goeolocation",
			"id": "geolocation",
			"description": "Your precise location",
			"industries": ["telco", "fitness"]
		},
		{
			"name": "IP addresses",
			"id": "ip",
			"description": "Your historical assigned IP addresses",
			"industries": ["fitness","dating"]
		},
		{
			"name": "Third Party Disclosures",
			"id": "disclosures",
			"description": "Records about sharing your info with third parties",
			"industries": ["telco","dating"]
		}
	],
	"personal_identifiers": [
		{
			"name": "First Name",
			"id": "firstname",
			"description": "Your first name",
			"industries": ["telco", "fitness"]
		},
		{
			"name": "Last Name",
			"id": "lastname",
			"description": "Your last name",
			"industries": ["telco", "fitness"]
		},
		{
			"name": "Email",
			"id": "email",
			"description": "Your email address",
			"industries": ["fitness"]
		},
		{
			"name": "Telephone",
			"id": "telephone",
			"description": "Your phone number.",
			"industries": ["telco"]
		},
		{
			"name": "Address 1",
			"id": "address1",
			"description": "First line of your address",
			"industries": ["telco"]
		},
		{
			"name": "Address 2",
			"id": "address2",
			"description": "Second line of your address",
			"industries": ["telco"]
		},
		{
			"name": "City",
			"id": "city",
			"description": "City you reside in",
			"industries": ["telco"]
		},
		{
			"name": "Province",
			"id": "province",
			"description": "Province you reside in",
			"options": [
				{
					"id": "AB",
					"name": "Alberta"
				},
				{
					"id": "BC",
					"name": "British Columbia"
				},
				{
					"id": "QC",
					"name": "Québec"
				},
				{
					"id": "MB",
					"name": "Manitoba"
				},
				{
					"id": "NB",
					"name": "New Brunswick"
				},
				{
					"id": "NL",
					"name": "Newfoundlan and Labrador"
				},
				{
					"id": "NS",
					"name": "Nova Scotia"
				},
				{
					"id": "NT",
					"name": "Northwest Territories"
				},
				{
					"id": "NU",
					"name": "Nunavut"
				},
				{
					"id": "ON",
					"name": "Ontario"
				},
				{
					"id": "PE",
					"name": "Prince Edward Island"
				},
				{
					"id": "QC",
					"name": "Québec"
				},
				{
					"id": "SK",
					"name": "Saskatchewan"
				},
				{
					"id": "YK",
					"name": "Yukon"
				},
			],
			"industries": ["telco"]
		},
		{
			"name": "Postal Code",
			"id": "postalcode",
			"description": "Postal Code",
			"industries": ["telco"]
		}
	]
}