import express from 'express';
import Donation from '../models/donation.js';

const DonationsRouter = express.Router({mergeParams : true});

// GET /donations
DonationsRouter.get('/', async (req, res) => {
    try {
        // get all donations
        const donations = await Donation.find();
        res.json(donations);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

// GET /donations/:donation_id 
DonationsRouter.get('/:donation_id', async (req, res) => {
    try {
        // get the donation with matching id
        const donation = await Donation.findById(req.params.donation_id);
        // if donation doesn't exist, return error message
        if (!donation) {
            return res.status(404).json({message: 'Donation not found'});
        }
    } catch(error) {

    }
});

// POST /donations 
DonationsRouter.post('/', async (req, res) => {
    // create a new donation
    const donation = new Donation({
        name: req.body.name,
        amount: req.body.amount,
    });

    try {
        // save the new donation to the model
        const newDonation = await donation.save();
        res.status(201).json(newDonation);
    } catch {
        res.status(400).json({message: error.message});
    }
});

// DELETE /donation/:donation_id
DonationsRouter.delete('/:donation_id', async (req, res) => {
    const donationId = req.params.donation_id;
    try {
        // delete the donation with matching id
        const deletedDonation = await Donation.findByIdAndDelete(donationId);
        // if donation doesn't exist, return error message
        if (!deletedDonation) {
            return res.status(404).json({message: 'Donation not found'});
        }
        res.json(deletedDonation);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

export default DonationsRouter;