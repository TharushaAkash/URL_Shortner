import mongoose from "mongoose";


const urlSchema = new mongoose.Schema(
    {
        long_url: {
            type: String,
            required: true
        },

        short_url: {
            type: String,
            required: true,
            unique: true
        },

        expireAt: {
            type: Date,
            index: {expires: '1D'}  //Delete data after 1day
        }
    }
)

const Url = mongoose.model("Url", urlSchema);
export default Url;