var controller = require('../controllers/itemController');

module.exports = function(app) {
    app.get('/', controller.home);
    app.get('/partials/:name', controller.partials);

    app.get('/items', controller.displayAll);

    app.post('/items', controller.doCreate);
    app.get('/items/:id', controller.displayOne);
    app.put('/items/:id', controller.doEdit);
    app.delete('/items/:id', controller.doDelete);

    app.all('*', controller.pageNotFound);
};
