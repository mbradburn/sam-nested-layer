const mystuff = require('mystuff');

exports.handler = async (event, context) => {
  await mystuff.myFunction();

  return {};
};
