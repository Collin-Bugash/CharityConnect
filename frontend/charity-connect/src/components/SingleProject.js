import { useLoaderData } from 'react-router-dom';

export default function SingleProject() {
  const project = useLoaderData();

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1 id="projectsH1">{project.title}</h1>
      <div key={project.id} id="project">
        <h4>{project.country}</h4>
        <h4><a href={project.organization.url}>Organization Website</a></h4>
        <img src={project.image.imagelink[3].url} alt="Provided by charity"/>
        <h3>Summary</h3>
        <p>{project.summary}</p>
        <h3>Charity Activities</h3>
        <p>{project.activities}</p>
        <h3>Funding Progress</h3>
        <meter id="fundingbar" value={project.funding} max={project.goal}> ${project.funding} / ${project.goal} </meter>
        <p>The funding goal for this project is ${project.goal}. So far ${project.funding} has been raised. {(project.funding < project.goal) ? "Donate to help them reach their goal!" : "This goal has already been met, but you can still donate!"}</p>
      </div>
    </>
  );

}

async function fetchSingleProject({ params }) {
  const API_URL = `https://api.globalgiving.org/api/public/projectservice/projects/${params.project_id}`;
  const API_KEY = '';
  const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  let jsonBlob = await response.json();
  console.log(jsonBlob.project);
  return jsonBlob.project;
}

export { fetchSingleProject };