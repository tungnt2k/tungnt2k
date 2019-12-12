const coreCtrl = require('../controllers').Core;

module.exports = function(app) {
    app.route('/').get(coreCtrl.renderHomePage);
    app.route('/project').get(coreCtrl.renderProject);
    app.route('/about').get(coreCtrl.renderAbout);
};