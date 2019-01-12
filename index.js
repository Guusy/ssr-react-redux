const express = require('express'),
          app = express(),
     template = require('./views/template')
         path = require('path');
          axios = require('axios');



// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);


const server =  require('./src/app/server')
//SSR function import
app.use(server)

// tiny trick to stop server during local development

  app.get('/exit', (req, res) => {
    if(process.env.PORT) {
      res.send("Sorry, the server denies your request")
    } else {
      res.send("shutting down")
      process.exit(0)
    }

  });