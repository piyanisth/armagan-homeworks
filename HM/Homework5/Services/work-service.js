const BaseService = require('./base-service')
const WorkModel = require('../models/work')

class WorkService extends BaseService {
    model = WorkModel                         
}
module.exports = new WorkService()