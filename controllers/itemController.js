var mongoose = require('mongoose');
var Item = mongoose.model('Item');


exports.home = function(req, res) {
    res.render('layout');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};


exports.displayAll = function(req, res) {
    Item.find(function(error, result) {
        res.json(result);
    });
};



exports.displayOne = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        res.json(result);
    });
};

exports.doCreate = function(req, res) {
    var item = new Item({
      name: req.body.name
    });
    item.save(function(error, result) {
        console.log(result + ' has been saved');
        res.json(result);
    });
};

exports.doEdit = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        result.name = req.body.name;
        result.save(function(error, editado) {
            console.log('item edited: ' + editado.name);
            res.json(true);
        });
    })
};

exports.doDelete = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        result.name = req.body.name;
        result.remove(function(error, removed) {
            console.log('item removed: ' + removed.name);
            res.json(true);
        });
    })
};



exports.pageNotFound = function(req, res) {
    res.status(404).send('this is the 404 page not found');
};