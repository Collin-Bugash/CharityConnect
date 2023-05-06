import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Donations() {
  const donations = useLoaderData();
  if (!donations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="donations-container">
      <Link to="/donations/new">
        <h2>Add Donation</h2>
      </Link>

      <h2>Donations</h2>
      {donations.length === 0 ? (
        <div>No donations found.</div>
      ) : (
        donations.map((donation) => (
          <div key={donation._id} className="donation">
            <Link to={`/donations/${donation._id}`} className="donation-link">
              <h2>Donation to {donation.name}</h2>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

async function fetchDonations() {
  const donationsResponse = await fetch(`http://localhost:3001/donations`);
  const donationsJson = await donationsResponse.json();
  return donationsJson;
}

export { fetchDonations };
