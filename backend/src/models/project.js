import mongoose from "mongoose";

//define structure for a project
const projectSchema = mongoose.Schema({
  //need is the project description
  need: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Project", projectSchema);
