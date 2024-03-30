import { NextResponse } from "next/server";
import connectDB from "../connectDB/connect";
import Users from "../model/userModel";

export async function POST(req){
    try {
        await connectDB()

        const {id} = await req.json()

        await Users.findByIdAndUpdate({_id : id},{role : 1}, {new : true})
        return NextResponse.json({success : 'Now an Admin'})
    } catch (error) {
        return NextResponse.json({error : 'Admin process interrupted'}, {status : 500})
    }
}