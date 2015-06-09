var bio = {
	"name": "Audessy Fang",
	"role": "Software Developer", 
	"contacts": {
		"mobile": "#]&!45739@#$",
		"email": "auddy@atlantis.com",
		"github": "AudessyTheHero",
		"twitter": "audessyFang",
		"location": "Atlantis, Pegises Galaxy, Universe"
	},
	"welcomeMessage": "Welcome to my precious unique resume!",
	"skills": [ "Computing", "PaloJumper flying", "Sushi Eater", "Complaining"],
	"bioPic": "images/Audessy.png",
	"display": function(){
		if(bio.name){
			$("#header").append(HTMLheaderName.replace("%data%", bio.name));
		}
		if(bio.role){
			$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
		}
		if(bio.contacts){
			for(contact in bio.contacts){
				var formattedcontact = HTMLcontactGeneric.replace("%contact%", contact);
				formattedcontact = formattedcontact.replace("%data%", bio.contacts[contact]);
				$("#header").append($("#topContacts").append(formattedcontact));
				$("#footerContacts").append(formattedcontact);
			}
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
			"name": "Huito Jupiter University",
			"city": "Huito, Jupiter, Milkyway Galaxy",
			"degree": "Master",
			"majors": ["ComputerScience", "Universe data science"],
			"dates": 2013,
			"url": "http://HuitoJupiterUniversity.org"
		},
		{
			"name": "Markuv University",
			"city": "Jitto, Mars, Milkyway Galaxy",
			"degree": "BS",
			"majors": ["ComputerScience"],
			"dates": 2002,
			"url": "http://MarkuvUniversity.org"
		}
	],
	"onlineCourses": [
		{
			"title": "Raith Methodology",
			"school": "Atlantis Academy",
			"dates": 2014,
			"url": "http://atlantisAcademy.org"
		},
		{
			"title": "Earth Science of Computing",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://udacity.com"
		}
	],
	"display": function(){
		if(education.schools.length > 0){
			$("#education").append(HTMLschoolStart);
			for(school in education.schools){
				$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
				$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].url));
				for(major in education.schools[school].majors){
					$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
				}
				
			}
		}
		if(education.onlineCourses.length > 0){
			$(".education-entry:last").append(HTMLonlineClasses);
			for(onlineCourse in education.onlineCourses){
				$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title));
				$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
			}
		}
	}	
};

var work = {
	"jobs" : [
		{
			"employer": "Planet Express",
			"title": "Universe traveler",
			"dates": "January 1222 - Future", 
			"description": "djhj sdjkdh fkjhdsf",
			"location": "Goopa - Jit Galaxy"
		},
		{
			"employer": "Atlantis stargate",
			"title": "Jumper driver",
			"dates": "January 5000 - Future", 
			"description": "dshk jsdhfkj sdhfjkh sdjk",
			"location": "Atlantis - Pegises Galaxy"
		}
	], 
	"display": function(){
		if(work.jobs.length > 0){
			$("#workExperience").append(HTMLworkStart);
			for(job in work.jobs){
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
			"title": "Taking Taila back from the Raith",
			"dates": 2014,
			"description" : "The mission with Kernel John Shepperd, Ronon and Rodny was to" +
							" bring the Taila back with her babay from an unhabbited planet which" +
							" Raith have resided in.",
			"images": []				 
		}
	],
	"display": function(){
		if(projects.projects.length > 0){
			$("#projects").append(HTMLprojectStart);
			for(project in projects.projects){
				$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
				$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
				$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
			}
		}
		
	}	
};

var locations = {
	"display": function(){
		//$("#mapDiv").append(internationalizeButton);
		$("#mapDiv").append(googleMap);
	}	
};

bio.display();
work.display();
projects.display();
education.display();
locations.display();
