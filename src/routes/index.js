const siteRouters = require('./site')
const DictionaryRouters = require('./dictionary')
//const newRouters = require('./news')

function route(app){  
    app.use('/dictionary', DictionaryRouters);
    app.use('/', siteRouters);

}

module.exports = route;