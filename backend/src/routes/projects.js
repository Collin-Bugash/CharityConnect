import express from 'express';
import project from '../models/project.js';

const ProjectsRouter = express.Router();

// GET /projects/favorited 
ProjectsRouter.get('/favorited', async (req, res) => {
    try {
        // get all projects that are favorited  
        // NOT SURE IF THIS IS HOW WE ARE SUPPOSED TO DO IT
        const projects = await project.find({favorited: true});
        res.json(projects);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

// GET /projects/:project_id
ProjectsRouter.get('/:project_id', async (req, res) => {
    try {
        // get project with matching id
        const project = await project.findById(req.params.project_id);
        // if project doesn't exist, return error message
        if (!project) {
            return res.status(404).json({message: 'Project not found'});
        }
        res.json(project);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

export default ProjectsRouter;