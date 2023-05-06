import React, { useState } from "react";

export default function NewDonation() {
  const [projectName, setProjectName] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit() {
    setAmount(
      parseFloat(amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
    const newDonation = {
      name: projectName,
      amount: amount,
    };

    await fetch(`http://localhost:3001/donations`, {
      method: "POST",
      body: JSON.stringify(newDonation),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // reset form fields
    setProjectName("");
    setAmount("");
  }

  return (
    <>
      <h1>Create New Donation</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.value = "";
          handleSubmit(e);
        }}
        id="donationform"
      >
        <label htmlFor="projectName">Enter Project</label>
        <input
          type="text"
          id="projectName"
          placeholder="Project Name..."
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label>Enter Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount..."
          step="0.01"
          min="0.01"
          max="100000"
          pattern="^\d+(\.\d{2})?$"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            console.log(e.target.value);
          }}
        />
        <br></br>
        <button type="submit">Add Donation</button>
      </form>
    </>
  );
}
