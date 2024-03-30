import { NextResponse } from "next/server";
import Users from "../model/userModel";
import connectDB from "../connectDB/connect";


export async function POST(req){
   const {name, email, number, region, division, batallion, company, idCard, age} = await req.json()

    try {
        await connectDB()

        if(!name){
            return NextResponse.json({error : `name is required`},{ status: 400 })
        }
        if(!email){
            return NextResponse.json({error : `email is required`},{ status: 400 })
        }
        if(!number){
            return NextResponse.json({error : `number is required`},{ status: 400 })
        }
        if(!region){
            return NextResponse.json({error : `region is required`},{ status: 400 })
        }
        if(!division){
            return NextResponse.json({error : `division is required`},{ status: 400 })
        }
        if(!batallion){
            return NextResponse.json({error : `batallion is required`},{ status: 400 })
        }
        if(!company){
            return NextResponse.json({error : `company is required`},{ status: 400 })
        }
        if(!idCard){
            return NextResponse.json({error : `idCard is required`},{ status: 400 })
        }
        if(!age){
            return NextResponse.json({error : `age is required`},{ status: 400 })
        }
         
         const existUser = await Users.findOne({email})
         const existId = await Users.findOne({idCard})
         if(existUser){
            return NextResponse.json({error : `${email} already waitlisted`},{ status: 400 })
         }
         if(existId){
            return NextResponse.json({error : `user with id ${idCard} already waitlisted`},{ status: 400 })
         }

         await new Users({name, email, number, region, division, batallion, company, idCard, age}).save()
         return NextResponse.json({success : 'You have successfully registered'})
    } catch (error) {
        console.log(error)

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}