const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema()

module.exports = restful.model('Funcionarios', todoSchema)