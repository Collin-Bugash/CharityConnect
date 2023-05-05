import mongoose from 'mongoose';

//define structure for a project
const projectSchema = mongoose.Schema({
    //need is the project description
    need: {
        type: String,
        required: true
    },
    funding: {
        type: Number,
    },
    goal: {
        type: Number,
    },
    image: {
        type: String,
        required: true
    },
    contactUrl: {
        type: String,
        required: true
    }
});

export default mongoose.model('Project', projectSchema);