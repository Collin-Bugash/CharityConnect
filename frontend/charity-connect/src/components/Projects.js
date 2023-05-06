import { Link, useLoaderData } from "react-router-dom";

export default function Projects() {
  const projects = useLoaderData();

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="projects-container">
        <h1 id="projectsH1">List of featured projects</h1>
        {projects.map((project) => (
          <div key={project.id} id="project">
            <Link
              to={`/projects/${project.id}`}
              target="_blank"
              id="project-link"
            >
              <h2>{project.title}</h2>
            </Link>
            <p>
              <em>{project.summary}</em>
            </p>
            <button
              onClick={() =>
                handleFavorite(project.id, project.title, project.summary)
              }
              className="favorite-button"
            >
              Favorite
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

async function fetchProjects() {
  const API_URL =
    "https://api.globalgiving.org/api/public/projectservice/featured/projects/summary";
  const API_KEY = "d3394120-adc6-49d3-951d-1fe54da47245";
  const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let jsonBlob = await response.json();
  console.log(jsonBlob.projects.project);
  return jsonBlob.projects.project;
}

async function handleFavorite(projectId, projectTitle, projectSummary) {
  await fetch("http://localhost:3001/projects/favorited", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: projectId,
      need: projectTitle,
      summary: projectSummary,
    }),
  });
}

export { fetchProjects };
