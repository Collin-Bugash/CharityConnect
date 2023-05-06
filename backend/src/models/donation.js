import mongoose from 'mongoose';

//define structure for a donation
const donationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
});

// create a model using the donation schema
export default mongoose.model('Donation', donationSchema);