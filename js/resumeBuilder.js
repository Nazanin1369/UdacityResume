var bio = {
	"name": "Nazanin Delam",
	"role": "Software Developer ||", 
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
	"welcomeMessage": "Welcome to my resume review page!",
	"skills": [ "AngularJS", "Java", "JavaScript", "Parallel Programming", "Algorithms"],
	"bioPic": "images/me.png",
	"display": function(){
		if(bio.name){
			$("#header").append(HTMLheaderName.replace("%data%", bio.name));
		}
		if(bio.role){
			$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
		}
		if(bio.contacts){
			for(i in bio.contacts){
				var formattedcontact = HTMLcontactGeneric.replace("%data%", bio.contacts[i].url);
				formattedcontact = formattedcontact.replace("%icon%", bio.contacts[i].src);
				(bio.contacts[i].title) && (formattedcontact = formattedcontact.replace("%title%", bio.contacts[i].title));
				$("#header").append($("#topContacts").append(formattedcontact));
				$("#footerContacts").append(formattedcontact);
			}	
			$("#header").append($("#topContacts").append(HTMLSkype));
			$("a").tooltip({'placement': 'right','content':'html'});
		}
		if(bio.bioPic){
			$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		}
		if(bio.welcomeMessage){
			$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		}
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills){
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
			}
		};
	}
};


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
			for(school in education.schools){
				$("#education").append(HTMLschoolStart); 
				$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + " " +
												  HTMLschoolDegree.replace("%data%", education.schools[school].degree));
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].url));
				var majors="";
				for(major in education.schools[school].majors){
					majors += education.schools[school].majors[major] + " ";
				}
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",majors));
				
			}
		}
		if(education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
			for(onlineCourse in education.onlineCourses){
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
				
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
				/*$(".education-entry:last").append(HTMLschoolStart);
				$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + " " +
												  HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));*/
			}
		}
	}	
};

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
			for(job in work.jobs){
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

var projects = {
	"projects": [
		{
			"title": "Hospital Information System (HIS)",
			"dates": 2012,
			"description" : "Hospital Information System for Clinical part of Airline company",
			"images": []				 
		},
		{
			"title": "Accountong System",
			"dates": 2013,
			"description" : "Contributor in accounting and financial reporting system development using" +
							"Java programming and SQL server database. Enabled numerous functionalities, " +
							"including exchanges between business firms, goods purchasing, payments, cash receipts, " +
							"and salaries record. Tested system using JUnit and used GIT for source versioning",
			"images": []
		},
		{
			"title": "Search Engine",
			"dates": 2014,
			"description" : "Designed and implemented scalable, high performance search engine that analyzed and " + 
							"indexed webpages, saving cache for improved search functionality. Utilized numerous advanced tools, " +
							"including UML Maven, MySQL, Hibernate, JSP, Tomcat, and Spring. Analyzed text and performed fuzzy string matching " +
							"with Apache, Lucene, Tika, and Luke. Developed software with Agile methodology.",
			"images": []
		}
	],
	"display": function(){
		if(projects.projects.length > 0){
			for(project in projects.projects){
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
			}
		}
		
	}	
};

var locations = {
	"locationizer": function(work_obj){
		var locationArray = [];
		for(job in work_obj.jobs){
			locationArray.push(work_obj.jobs[job].location);
		}
		return locationArray;
	},
	"display": function(){
		$("#main").append(internationalizeButton);
		$("#mapDiv").append(googleMap);
	}	
};

var utils = {
	"inName": function(name){
		var names = name.trim().split(" ");
   		names[1] = names[1].toUpperCase();
    	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    	finalName = names.join(" ");
    	return finalName;
	}
}



var bubbleChartSkills = {
	"build": function() {
	  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "Java", count: "236"},
        {text: ".Net", count: "382"},
        {text: "Php", count: "170"},
        {text: "Ruby", count: "123"},
        {text: "D", count: "12"},
        {text: "Python", count: "170"},
        {text: "C/C++", count: "382"},
        {text: "Pascal", count: "10"},
        {text: "Something", count: "170"},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            alert("Here is more details!!");
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
		
	},
	"display": function(){
		$("#skillChart").append(bubbleChart);
	}
};

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
						.attr({'width':900,'height':500});

		var grids = canvas.append('g')
						  .attr('id','grid')
						  .attr('transform','translate(150,10)')
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
						  .attr("transform", "translate(150,0)")
						  .attr('id','yaxis')
						  .call(yAxis);

		var x_xis = canvas.append('g')
						  .attr("transform", "translate(150,480)")
						  .attr('id','xaxis')
						  .call(xAxis);

		var chart = canvas.append('g')
							.attr("transform", "translate(150,0)")
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
							.attr({'x':function(d) {return xscale(d)-50; },'y':function(d,i){ return yscale(i)+35; }})
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
//bubbleChartSkills.display();
barChartSkills.display();
//bubbleChartSkills.build();
barChartSkills.build();

//$(".biopic").addClass("animated fadeInUp");
//$(".work-entry").addClass("animated fadeInDown");
