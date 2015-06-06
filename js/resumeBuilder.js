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
	"welcomeMessage": "",
	"skills": [ "Computing", "PaloJumper flying", "Sushi Eater"],
	"bioPic": "images/Audessy.png"
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
	]
};

var work = {
	"jobs" : [
		{
			"employer": "Planet Express",
			"title": "Universe traveler",
			"dates": "January 1222 - Future", 
			"description": ""
		},
		{
			"employer": "Atlantis stargate",
			"title": "Jumper driver",
			"dates": "January 5000 - Future", 
			"description": ""
		}
	], 	
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
	]
};

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);		
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-enty:last").append(formattedEmployerTitle);
}

console.log(HTMLworkEmployer);