import { NextResponse } from "next/server"
import connectDB from "../connectDB/connect"
import Users from "../model/userModel"

export async function GET(){
    try {
        await connectDB()
        const userData = await Users.find()
        return NextResponse.json({userData})

    } catch (error) {
        return NextResponse.json({error : `an error of ${error} occur`})
    }
}