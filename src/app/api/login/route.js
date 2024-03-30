// import { NextResponse } from "next/server";
// import connectDB from "../connectDB/connect";
// import Users from "../model/userModel";


// export async function POST(req){
//     try {
//         await connectDB()
        
//         const {email,password} = await req.json()

//         if(!email){
//             return NextResponse.json({error : 'email is required'},{status : 400})
//         }
//         if(!password){
//             return NextResponse.json({error : 'password is required'},{status : 400})
//         }

//         const isAdmin = await Users.findOne({email})

//         if(isAdmin && isAdmin.role === 1 || isAdmin && password === "Apata@ROS"){
//             return NextResponse.json({success : 'welcome Admin'})
            
//         }else{
//             return NextResponse.json({error : 'You are not an Admin'}, {status : 400})
//         }
//     } catch (error) {
//         return NextResponse.json({error : `an error of ${error} occured`}, {status : 500})
//     }
// }