var express = require('express');
var router = express.Router();
var navigator = require("navigator");
var firebase = require("firebase");
var geolocation = require("geolocation")

var config = {
    apiKey: "AIzaSyC9WgWiQkE0V54GGHYDxBbTrRr-LAyXhVQ",
    authDomain: "god-s-eye-ceba0.firebaseapp.com",
    databaseURL: "https://god-s-eye-ceba0.firebaseio.com",
    projectId: "god-s-eye-ceba0",
    storageBucket: "god-s-eye-ceba0.appspot.co"
};



firebase.initializeApp(config);
/* GET home page. */
router.get('/home', function(req, res, next) {
    let car_1 = "HRZ4AW5QQ";
    let numPlate = car_1;
    console.log(numPlate);
    var stuff;
    var database = firebase.database();







   /* function loader() {
        firebase.database().ref( '/Number Plate Number/\"' + numPlate + '\"' ).on('value', function (snap) {
            let object = snap.val();
            console.log(object);
            console.log();
          // stuff = new User(object[Object.entries(object)[(Object.entries(object).length - 1)][0]]);
            getLocation();
            //stuff.sayit();
        });
}
    loader();
*/
  // getLocation();
    res.render('home');
});


router.get('/service', function(req, res, next) {
    res.render('service');
});

router.post('/addservice', function(req,res,next){
    const data = {
        date:req.body.date,
        km:req.body.KMS
    }
    res.render('service', data);
})

router.get('/pollution', function(req, res, next) {
    res.render('pollution');
});

router.post('/addpollution', function(req,res,next){
    const data = {
        date:req.body.date,
        km:req.body.KMS
    }
    res.render('pollution', data);
})
module.exports = router;
