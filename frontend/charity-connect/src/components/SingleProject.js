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
        <img src={project.imageLink} alt="Provided by charity"/>
        <h3>Summary</h3>
        <p>{project.summary}</p>
        <h3>How Funds are Used</h3>
        <div dangerouslySetInnerHTML={{__html: project.howDonationsAreUsed}}></div>
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