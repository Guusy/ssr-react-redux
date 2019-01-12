const ssrHome = require('../../../../views/home');
const template = require('../../../template');
const data = require('../../../../assets/data.json');

const getDataHome = (req, res, next) => {
  res.locals.dataHome = {
    isFetching: false,
    apps: data
  };
  return next();
}
const renderhome = (req,res) => {
  const { preloadedState, content }  = ssrHome({ ...res.locals.dataHome })
  const response = template("Home", preloadedState, content, 'home')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
}


module.exports = {
  getDataHome,
  renderhome
}