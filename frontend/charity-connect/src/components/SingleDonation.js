import { Link, useLoaderData } from "react-router-dom";

export default function SingleDonation() {
  const donation = useLoaderData();
  if (!donation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Donation to {donation.name}</h2>
      <h2>Amount: {donation.amount}</h2>
    </>
  );
}

async function fetchDonation({ params }) {
  const donationResponse = await fetch(
    `http://localhost:3001/donations/${params.donation_id}`
  );
  const donationJson = await donationResponse.json();
  return donationJson;
}

export { fetchDonation };
