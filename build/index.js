const fs = require('fs')
const consts = require('./utils/consts')
const project = require('./utils/project')

// --project 后面没加参数值的时候默认为 true
if (project.NAME === true) {
  console.error('Error: please add your project name after command "npm run build/dev".')
  process.exit()
}

if (!fs.existsSync(project.DIR)) {
  console.error('Error: the project doesn\'t exist.')
  process.exit()
}

module.exports = require(`./webpack.${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}`)
