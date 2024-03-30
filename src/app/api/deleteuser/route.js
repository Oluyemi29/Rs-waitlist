import { NextResponse } from "next/server"
import connectDB from "../connectDB/connect"
import Users from "../model/userModel"

export async function POST(req){
    const{id} = await req.json()
    try{
        await connectDB()

        await Users.findByIdAndDelete(id)
        return NextResponse.json({success : 'user deleted successfully'})
    }catch(error){
        return NextResponse.json({error : 'unable to delete user'},{status : 500})
    }
}