import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function SingleDonation() {
  const donation = useLoaderData();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await fetch(`http://localhost:3001/donations/${donation._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Redirect to the homepage after successful deletion
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!donation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="donation-container">
      <h2 className="donation-heading">Donation to {donation.name}</h2>
      <h2 className="donation-amount">Amount: ${donation.amount.toFixed(2)}</h2>
      <button
        className="delete-button"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
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
