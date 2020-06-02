var express = require('express');
var SelfReloadJSON = require('self-reload-json');

var content_experiences = new SelfReloadJSON(__dirname + "/experiences.json")
var content_projects = new SelfReloadJSON(__dirname + "/projects.json")
var content_educations = new SelfReloadJSON(__dirname + "/educations.json")
var content_skills = new SelfReloadJSON(__dirname + "/skills.json")
var content_interests = new SelfReloadJSON(__dirname + "/interests.json")

var router = express.Router();
var staticpath = process.env.ENV == 'dev' ? '/':'static/';

router.get('/', function(req, res, next){
    res.render('index',{
        experiences:content_experiences,
        projects:content_projects,
        educations:content_educations,
        skills:content_skills,
        interests:content_interests,
        staticpath: staticpath
    })
})

module.exports = router;