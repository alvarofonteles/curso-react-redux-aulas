const Todo = require('./todoFunc')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo