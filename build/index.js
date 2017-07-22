const fs = require('fs')
const consts = require('./utils/consts')

// --project 后面没加参数值的时为 true
if (consts.PROJECT === true) {
  console.error('Error: please add your project name after command "npm run build/dev".')
  process.exit()
}

if (!fs.existsSync(`./src/projects/${consts.PROJECT}`)) {
  console.error('Error: the project doesn\'t exist.')
  process.exit()
}

module.exports = require(`./webpack.${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}`)
