import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../connectDB/connect";
import Users from "../../model/userModel";
import { NextResponse } from "next/server";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    CredentialsProvider({
        name : 'Credentials',

        credentials : {
            username : {label : 'email', type : 'email', placeholder: "jsmith@gmail.com"},
            password : {label : 'password', type : 'password'}
        },
        async authorize(credentials){
            const {email, password } = credentials

            try {
                await connectDB()

                const user = await Users.findOne({email})
                

                if(!user){
                  return null
                }
                if(user.role !== 1 || password !== 'Apata@ROS' || email !== 'petlar4real@gmail.com'){
                  return null
                }

                return {
                  ...user.toObject(),
                  email: user.email, // Make sure email is included in the session
                };

            } catch (error) {
                console.log(`an error of ${error} occured`)
            }
        }

    })
  ],
  pages : {
    signIn : '/login'
  },
  session : {
    strategy : 'jwt'
  },
  secret : process.env.NEXTAUTHSECRET,
}


const handler = nextAuth(authOptions)

export {handler as GET, handler as POST}