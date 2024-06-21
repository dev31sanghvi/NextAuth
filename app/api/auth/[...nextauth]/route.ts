// import { NextRequest, NextResponse } from "next/server";

// export function GET(req:NextRequest,args:any
// ){
    //destructuring
//     console.log(args.params.authRoutes);
//     return NextResponse.json({
//     message:"route handler it is"
//     })
// }
// export function POST(){
//     return NextResponse.json({
//     message:"users page "
//     })
// }
import NextAuth from "next-auth"
const handler = NextAuth({

  })


export const GET=handler;
export const POST=handler;
