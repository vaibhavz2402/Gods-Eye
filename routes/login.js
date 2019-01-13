var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login');
});


router.post('/login' ,(req,res) => {

    const data = {
        ownernm:req.body.ownernm,
        mobilenm:req.body.mobilenm,
        flatnm:req.body.flatnm,
        carnm:req.body.carnm,
        rcnm:req.body.rcnm,
        date: Date.now(),
    }
     /*   .save()
        .then(() => {
            console.log('saved')
            res.redirect('/home')
        })
*/
    res.render('home',{data : data });

})



module.exports = router;
