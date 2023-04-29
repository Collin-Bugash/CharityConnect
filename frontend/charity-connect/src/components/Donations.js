import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Donations() {
    const donations = useLoaderData()
    if(!donations) {
        return <div>Loading...</div>
    }

    return(
        <>
            <h1>Donations</h1>
            {donations.donations.map((donation) => (
                <div key={donation._id} id="donation">
                <Link to={`/donations/${donation._id}`}>
                    <h2>Donation to {donation.project}</h2>
                </Link>
                </div>
            ))}
        </>
    )
}

async function fetchDonations() {
    // const donationsResponse = await fetch(`http://localhost:3000/donations`);
    // const donationsJson = await donationsResponse.json()
    // return donationsJson;
    const dummyResponse = {
        donations: [
            {
               project: "Some project",
               amount: 53
            }
        ]
    }
    return dummyResponse;
}

export { fetchDonations }