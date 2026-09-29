import mongoose from "mongoose";

const blacklistSchema = mongoose.Schema({

    token: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        expires: 900
    }

})

export const blacklistModel = mongoose.model("Blacklist", blacklistSchema);