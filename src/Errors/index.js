const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const CustomErrors = {};

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  }).forEach(file => {
    const custom = require(path.join(__dirname, '', file))
    CustomErrors[custom.name] = custom;
  })

  module.exports = CustomErrors;