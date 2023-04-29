import { Link, useLoaderData } from "react-router-dom";


export default function SingleDonation() {
    const donation = useLoaderData()
    if(!donation) {
        return(<div>Loading...</div>)
    }

    return(
        <>
            <Link to={`/projects/${donation.project.id}`} id="project">
                <h2>Donation to {donation.project.title}</h2>
            </Link>
            <h2>Amount: {donation.amount}</h2>
        </>
    )
}

async function fetchDonation({ params }) {
    const donationResponse = await fetch(`http://localhost:3000/donations${params.donation_id}`)
    const donationJson = await donationResponse.json()
    return donationJson;
}

export { fetchDonation }