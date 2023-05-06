import express from "express";
import Project from "../models/project.js";

const ProjectsRouter = express.Router();

// GET /projects/favorited
ProjectsRouter.get("/favorited", async (req, res) => {
  try {
    // get all projects that are favorited
    // NOT SURE IF THIS IS HOW WE ARE SUPPOSED TO DO IT
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /projects/:project_id
ProjectsRouter.get("/:project_id", async (req, res) => {
  try {
    // get project with matching id
    const project = await Project.findById(req.params.project_id);
    // if project doesn't exist, return error message
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /donations
ProjectsRouter.post("/favorited", async (req, res) => {
  // check if the id already exists in the database
  const existingProject = await Project.findOne({ id: req.body.id });
  if (existingProject) {
    return res
      .status(400)
      .json({ message: "Project with this id already exists" });
  }

  // create a new project
  const project = new Project({
    need: req.body.need,
    summary: req.body.summary,
    id: req.body.id,
  });

  try {
    // save the new project to the model
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default ProjectsRouter;
