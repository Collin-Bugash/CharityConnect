import { Link, useLoaderData } from "react-router-dom";

export default function Projects() {

    const projects = useLoaderData();

    if (!projects) {
        return <div>Loading...</div>;
    }

      return (
        <>
          <h1 id="projectsH1">List of all projects</h1>
          {projects.map((project) => (
            <div key={project.id} id="project">
              <Link to={`/projects/${project.id}`} id="project">
                <h2>{project.title}</h2>
              </Link>
              <p><em>{project.summary}</em></p>
            </div>
          ))}
        </>
      );
}

async function fetchProjects() {
    const API_URL = 'https://api.globalgiving.org/api/public/projectservice/featured/projects';
    const API_KEY = 'OMITTED';
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    let jsonBlob = await response.json();
    console.log(jsonBlob.projects.project);
    return jsonBlob.projects.project;
}

export { fetchProjects };