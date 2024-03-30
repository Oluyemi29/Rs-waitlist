import mongoose from 'mongoose'
import React from 'react'

const userModel = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    number : {
        type : String,
        required : true
    },
    region : {
        type : String,
        required : true
    },
    division : {
        type : String,
        required : true
    },
    batallion : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    idCard : {
        type : Number,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    role : {
        type : Number,
        default : 0
    }
},{timestamps : true})

const Users = mongoose.models.users || mongoose.model('users', userModel)

export default Users