if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    CONNECTIONSTRING: process.env.CONECTIONSTRING,
    APPLICATION_NAME: process.env.APPLICATION_NAME
}