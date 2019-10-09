var express = require('express');
const ArticleModel = require('../models/article.js');
var router = express.Router();

router.post('/addArticle', (req, res)=>{
    const article = ArticleModel({
        title: req.body.title,
        content: req.body.content
    });
    article.save();
    res.send('ok');
});
router.get('/',(req,res)=>{
    ArticleModel.find({})
    .then(data=> res.send(data))
    .catch((err)=>{if(err) throw err});
})


module.exports = router;