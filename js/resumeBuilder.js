// Bio
var bio = {
	"name": "Nazanin Delam  ",
	"role": "Software Developer", 
	"contacts":{
		"location": {
			"url":"https://www.google.com/maps/place/San+Francisco,+CA/@37.7577,-122.4376,12z/data=!3m1!4b1!4m2!3m1!1s0x80859a6d00690021:0x4a501367f076adff",
			"src": "images/location.svg",
			"title": "San Francisco, CA"
		},
		"email": {
			"url":"mailto:nazanin1427@gmail.com", 
			"src": "images/email.svg",
			"title": "nazanin1427@gmail.com"
		},
		"github": {
			"url":"https://github.com/Nazanin1369", 
			"src": "images/github.svg",
			"title": "Nazanin1369"
		},
		"linkedin": {
			"url":"https://www.linkedin.com/in/nazanindelam", 
			"src": "images/linkedIn.svg",
			"title": "nazanindelam"
		}
	},
	"welcomeMessage": " a bit about me!",
	"detailedMessage": "Highly skilled Java programmer and front-end developer with nearly 4 years of experience" +
						"in software engineering, web application development and system enhancement for better performance. ",
	"skills1": [ "AngularJS", "Java Programming", "JavaScript"],
	"skills2": ["Parallel Programming", "Algorithms", "Compilers"],
	"skills3": [ "Responsive design", "Unit testing", "Debugging"],
	"bioPic": "images/me.png",
	"display": function(){

		if(bio.name && bio.role){
			var header = HTMLheaderName.replace("%data%", bio.name);
			$("#top-header").append(header.replace("%role%", bio.role));
		}
		if(bio.contacts){
			for(var i in bio.contacts){
				var formattedcontact = HTMLcontactGeneric.replace("%data%", bio.contacts[i].url);
				formattedcontact = formattedcontact.replace("%icon%", bio.contacts[i].src);
				(bio.contacts[i].title) && (formattedcontact = formattedcontact.replace("%title%", bio.contacts[i].title));
				$("#main-header").append($("#main-header-right").append($("#topContacts").append(formattedcontact)));
				$("#footerContacts").append(formattedcontact);
			}	
			$("a").tooltip({'placement': 'left','content':'html'});
		}
		if(bio.welcomeMessage){
			$("#main-header").append($("#main-header-right").append($("#welcomeMsg").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))));
			$("#main-header").append($("#main-header-right").append($("#welcomeMsgDetail").
				append(HTMLwelcomeMsgDetail.replace("%data%", bio.detailedMessage))));
		}
		
		if(bio.bioPic){
			$("#main-header").append($("#main-header-left").append(HTMLbioPic.replace("%data%", bio.bioPic)));
		}
		(bio.skills1.length > 0 || bio.skills1.length > 0 || bio.skills1.length > 0) && 
				($("#main-header").append($("#main-header-right").append(HTMLSkillLabel)));

		if(bio.skills1.length > 0){
			$("#main-header").append($("#main-header-right").append($("#skills").append(HTMLskills1Start)));
			for(var j=0; j < bio.skills1.length; j++){
				$("#skills1").append(HTMLskills.replace("%data%", bio.skills1[j]));
			}
		};
		if(bio.skills2.length > 0){
			$("#main-header").append($("#main-header-right").append($("#skills").append(HTMLskills2Start)));
			for(var j=0; j < bio.skills2.length; j++){
				$("#skills2").append(HTMLskills.replace("%data%", bio.skills2[j]));
			}
		};
		if(bio.skills3.length > 0){
			$("#main-header").append($("#main-header-right").append($("#skills").append(HTMLskills3Start)));
			for(var j=0; j < bio.skills3.length; j++){
				$("#skills3").append(HTMLskills.replace("%data%", bio.skills3[j]));
			}
		};
	}
};

// Education
var education = {
	"schools": [
		{
			"name": "Iowa State University",
			"city": "Iowa City, IA",
			"degree": "Master",
			"majors": ["ComputerScience"],
			"dates": "2013 - 2015",
			"url": "https://www.iastate.edu/"
		},
		{
			"name": "New York university",
			"city": "New York, NY",
			"degree": "BS",
			"majors": ["ComputerScience"],
			"dates": "2008 - 2012",
			"url": "http://www.nyu.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "AngularJS",
			"school": "Code School",
			"dates": " September 2014",
			"url": "www.codeschool.com/‎"
		},
		{
			"title": "Udacity Front-end Nanodegree",
			"school": "Udacity",
			"dates": "June 2015",
			"url": "http://udacity.com"
		}
	],
	"display": function(){
		if(education.schools.length > 0){
			for(var school in education.schools){
				$("#education").append(HTMLschoolStart); 
				$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + " " +
												  HTMLschoolDegree.replace("%data%", education.schools[school].degree));
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].url));
				var majors="";
				for(var major in education.schools[school].majors){
					majors += education.schools[school].majors[major] + " ";
				}
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",majors));
				
			}
		}
		if(education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
			for(var onlineCourse in education.onlineCourses){
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
				
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}	
};

//Work
var work = {
	"jobs" : [
		  {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
	], 
	"display": function(){
		if(work.jobs.length > 0){
			for(var job in work.jobs){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append( HTMLworkEmployer.replace("%data%", work.jobs[job].employer + " " + 
										 HTMLworkTitle.replace("%data%", work.jobs[job].title)));						 
				$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));	
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));	
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));								 
			}	
		}
	}	
};

//Projects
var projects = {
	"projects": [
		{
			"title": "Hospital Information System (HIS)",
			"dates": 2012,
			"description" : "Hospital Information System for Clinical part of Airline company",
			"images": ["images/p1.jpg"]				 
		},
		{
			"title": "Accountong System",
			"dates": 2013,
			"description" : "Contributor in accounting and financial reporting system development using" +
							"Java programming and SQL server database. Enabled numerous functionalities, " +
							"including exchanges between business firms, goods purchasing, payments, cash receipts, " +
							"and salaries record. Tested system using JUnit and used GIT for source versioning",
			"images": ["images/p2.png"]
		},
		{
			"title": "Search Engine",
			"dates": 2014,
			"description" : "Designed and implemented scalable, high performance search engine that analyzed and " + 
							"indexed webpages, saving cache for improved search functionality. Utilized numerous advanced tools, " +
							"including UML Maven, MySQL, Hibernate, JSP, Tomcat, and Spring. Analyzed text and performed fuzzy string matching " +
							"with Apache, Lucene, Tika, and Luke. Developed software with Agile methodology.",
			"images": ["images/p3.jpg", "images/p5.jpg"]
		}
	],
	"display": function(){
		if(projects.projects.length > 0){
			for(var i in projects.projects){
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
				for(var j in projects.projects[i].images){
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
				}	
			}
		}
		
	}	
};

//Location
var locations = {
	"locationizer": function(work_obj){
		var locationArray = [];
		for(var job in work_obj.jobs){
			locationArray.push(work_obj.jobs[job].location);
		}
		return locationArray;
	},
	"display": function(){
		$("#main").append(internationalizeButton);
		$("#mapDiv").append(googleMap);
	}	
};

//Utility methods
var utils = {
	"inName": function(name){
		var names = name.trim().split(" ");
   		names[1] = names[1].toUpperCase();
    	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    	var finalName = names.join(" ");
    	return finalName;
	}
};

// D3 Skills Chart
var barChartSkills = {
	"build": function(){

		var skills = ['', 'Java', 'JavaScript', 'OO programming', 'AngularJS', 'Algorithms', 'Data Visualization',
		 'JQuery', 'HTML5', 'Material Design', 'Design Pattern', 'AJAX', 'Web Application', 'CSS', 'Hibernate', 'Git'];
		var years = [6, 5, 6, 1, 4, 2, 5, 3, 1, 7.5, 3.5, 6.5, 5.5, 2.5, 3];

		var colors = ['#0000b4','#0082ca','#0094ff','#0d4bcf','#0066AE','#074285','#00187B','#285964','#405F83','#416545','#4D7069','#6E9985','#7EBC89','#0283AF','#79BCBF','#99C19E'];

		var grid = d3.range(25).map(function(i){
			return {'x1':0,'y1':0,'x2':0,'y2':480};
		});

		var tickVals = grid.map(function(d,i){
			if(i>0){ return i; }
			else if(i===0){ return "10";}
		});
		
		var margin = {top: 20, right: 20, bottom: 30, left: 60},
		ww = document.getElementById("wrapper").clientWidth,
		width = ww - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

		var xscale = d3.scale.linear()
						.domain([0,10])
						.range([0,722]);

		var yscale = d3.scale.linear()
						.domain([0,skills.length])
						.range([0,480]);

		var colorScale = d3.scale.quantize()
						.domain([0,skills.length])
						.range(colors);

		var canvas = d3.select('#wrapper')
						.append('svg')
						.attr("width", width + margin.left + margin.right)
    					.attr("height", height + margin.top + margin.bottom);
						

		var grids = canvas.append('g')
						  .attr('id','grid')
						  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
						  .selectAll('line')
						  .data(grid)
						  .enter()
						  .append('line')
						  .attr({'x1':function(d,i){ return i*72; },
								 'y1':function(d){ return d.y1; },
								 'x2':function(d,i){ return i*72; },
								 'y2':function(d){ return d.y2; },
							})
						  .style({'stroke':'#adadad','stroke-width':'1px'});

		var	xAxis = d3.svg.axis();
			xAxis
				.orient('bottom')
				.scale(xscale)
				.tickValues(tickVals);

		var	yAxis = d3.svg.axis();
			yAxis
				.orient('left')
				.scale(yscale)
				.tickSize(2)
				.tickFormat(function(d,i){ return skills[i]; })
				.tickValues(d3.range(17));

		var y_xis = canvas.append('g')
						  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
						  .attr('id','yaxis')
						  .call(yAxis);

		var x_xis = canvas.append('g')
						  .attr("transform", "translate(" + margin.left + ",480)")
						  .attr('id','xaxis')
						  .call(xAxis);

		var chart = canvas.append('g')
							.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
							.attr('id','bars')
							.selectAll('rect')
							.data(years)
							.enter()
							.append('rect')
							.attr('height',19)
							.attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
							.style('fill',function(d,i){ return colorScale(i); })
							.attr('width',function(d){ return 0; });


		var transit = d3.select("svg").selectAll("rect")
						    .data(years)
						    .transition()
						    .duration(1000) 
						    .attr("width", function(d) {return xscale(d); });

		var transitext = d3.select('#bars')
							.selectAll('text')
							.data(years)
							.enter()
							.append('text')
							.attr({'x':function(d) {return 40; },'y':function(d,i){ return yscale(i)+35; }})
							.text(function(d){ return d+"years"; }).style({'fill':'#fff','font-size':'14px'});
	},
	"display": function(){
		$("#skillChart").append(barChart);
	}
};

//Display functions
bio.display();
work.display();
projects.display();
education.display();
locations.display();
barChartSkills.display();
barChartSkills.build();
