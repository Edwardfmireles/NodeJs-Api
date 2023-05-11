 const container = require('./src/statup/container');
 const server = container.resolve("app");
 const {CONNECTIONSTRING} = container.resolve("config");
 const odbc = require('odbc');

 odbc.connect(CONNECTIONSTRING, (err, conn) => {
    if (err) {
        return console.log('Connection failed.');
    }
    server.start();
 });