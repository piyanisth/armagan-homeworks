const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
    title: {                
        type: String,
        required: true,
        minlength: 3
    },
    description: {                 
        type: String,
        required: true,
        minlength: 5
    }
})

// WorkSchema.methods.findPeersOver18 = function (cb) {
//     return WorkModel.find({
//         length: {
//             $gte: 10 
//         }
//     });
// };

// WorkSchema.plugin(require('mongoose-autopopulate'))           //WorkSchema'ya autopopulate eklentisi(plugin) yaptık.

const WorkModel = mongoose.model('Work', WorkSchema)

module.exports = WorkModel
