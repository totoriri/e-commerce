const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uudd/v1')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:String,
    }
})