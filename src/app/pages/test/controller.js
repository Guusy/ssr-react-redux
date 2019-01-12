const ssrTest = require('../../../../views/test');
const template = require('../../../template');



const getDataSwapi = async (req, res, next) => {
  const request = await axios.get('https://swapi.co/api/people/1');
  res.locals.swapiData = request.data;
  return next();
}
const renderTest = (req,res) => {
  const { preloadedState, content }  = ssrTest({ swapiData : res.locals.swapiData })
  const response = template("Testing", preloadedState, content,'test')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
}


module.exports = {
  getDataSwapi,
  renderTest
}