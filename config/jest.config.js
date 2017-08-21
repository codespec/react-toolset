const shallow = require('enzyme/shallow')
const mount = require('enzyme/mount')
const render = require('enzyme/render')

global.shallow = shallow
global.mount = mount
global.render = render

console.error = message => {
  throw new Error(message)
}
