const siteRouters = require('./site')
//const newRouters = require('./news')

function route(app){  
    app.use('/', siteRouters);
 //   app.use('/news', newRouters);
}

module.exports = route;