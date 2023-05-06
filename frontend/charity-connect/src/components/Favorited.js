import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Donations() {
  const projects = useLoaderData();

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="projects-container">
        <h1 id="projectsH1">List of favorited projects</h1>
        {projects.map((project) => (
          <div key={project._id} id="project">
            <Link
              to={`/projects/${project.id}`}
              target="_blank"
              id="project-link"
            >
              <h2>{project.need}</h2>
            </Link>
            <p>
              <em>{project.summary}</em>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

async function fetchFavorited() {
  const favoritedProjects = await fetch(
    `http://localhost:3001/projects/favorited`
  );
  const favoritedProjectsJson = await favoritedProjects.json();
  return favoritedProjectsJson;
}

export { fetchFavorited };
