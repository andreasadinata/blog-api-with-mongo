////call what will we need first
//const express = require('express');
//const router = express.Router();
//
//const bodyParser = require('body-parser'); //ask marius more about these two
//const jsonParser = bodyParser.json();
//const {
//    BlogPosts
//} = require('./models');
//
//BlogPosts.create('The best blog post', 'Here is where the best blog post should go', 'Patrick hubbard');
//BlogPosts.create('tomatoes', 'this is a blog post all about tomatoes', 'Tomatoe Farmer');
//BlogPosts.create('peppers', 'this is a blog post about them spicy peppers!', 'hot chillie lover');
//
////GET API
////router.get('/', (req, res) => {
////    BlogPosts.find().exec().then(posts => {
////            res.json(posts.map(post => post.apiRepr()));
////        })
////        .catch(err => {
////            console.error(err);
////            res.status(500).json({
////                error: 'something went terribly wrong'
////            })
////        });
////    res.json(BlogPosts.get());
////});
//router.get('/', (req, res) => {
//    res.json(BlogPosts.get());
//});
////GET API by ID
//
//router.get('/:id', (req, res) => {
//    BlogPosts.findById(req.params.id).exec().then(posts => {
//            res.json(posts.map(post => post.apiRepr()))
//        })
//        .catch(err => {
//            console.error(err);
//            res.status(500).json({
//                error: 'something went terribly wrong'
//            })
//        });
//});
//
////POST API
//router.post('/', jsonParser, (req, res) => {
//    const requiredFields = ['title', 'content', 'author', 'publishDate'];
//    for (let i = 0; i < requiredFields.length; i++) {
//        const field = requiredFields[i];
//        if (!(field in req.body)) {
//            const message = `Missing \`${field}\` in request body`;
//            console.error(message);
//            return res.status(400).send(message);
//        }
//    }
//    BlogPosts.create({
//            title: req.body.title,
//            content: req.body.content,
//            author: req.body.author
//        })
//        .then(blogPosts => res.status(201).json(blogPosts.apiRepr()))
//        .catch(err => {
//            console.error(err);
//            res.status(500).json({
//                error: 'Something went wrong'
//            })
//        });
//});
//
////DELETE API
//router.delete('/:id', (req, res) => {
//    BlogPosts.findByIdAndRemove(req.params.id)
//        .exec()
//        .then(() => {
//            res.status(204).json({
//                message: 'success'
//            });
//        })
//        .catch(err => {
//            console.error(err);
//            res.status(500).json({
//                error: 'something went terribly wrong'
//            });
//        });
//});
//
//router.put('/:id', jsonParser, (req, res) => {
//    console.log("put body id = ", req.body.id);
//    const requiredFields = ['title', 'content', 'author', 'publishDate'];
//    //    for (let i = 0; i < requiredFields.length; i++) {
//    //        const field = requiredFields[i];
//    //        if (!(field in req.body)) {
//    //            const message = `Missing \`${field}\` in request body`;
//    //            console.error(message);
//    //            return res.status(400).send(message);
//    //        }
//    //    }
//    //    if (req.params.id !== req.body.id) {
//    //        const message = (
//    //            `Request path id (${req.params.id}) and request body id `
//    //            `(${req.body.id}) must match`);
//    //        console.error(message);
//    //        return res.status(400).send(message);
//    //    }
//
//    BlogPosts.get(function (err, items) {
//        if (err) {
//            return res.status(404).json({
//                message: 'Item not found.'
//            });
//        }
//        BlogPosts.update({
//            _id: req.body.id
//        }, {
//            $set: {
//                title: req.body.title,
//                content: req.body.content,
//                author: req.body.author,
//                publishDate: req.body.publishDate
//            }
//        }, function () {
//            res.status(201).json(items);
//        });
//
//    });
//    //    const updatedItem = BlogPosts.update({
//    //        id: req.body.id,
//    //        title: req.body.title,
//    //        content: req.body.content,
//    //        author: req.body.author,
//    //        publishDate: req.body.publishDate
//    //    });
//    //
//    //    res.status(204).json(updatedItem);
//});
//
//module.exports = router;
