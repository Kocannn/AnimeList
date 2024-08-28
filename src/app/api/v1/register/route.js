import prisma from "../../../../libs/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export async function POST(request){

    const body = await request.json();
    const {name, email, password, image} = body.data;
    if(!name || !email || !password){
        return new NextResponse("Missing Info", {status: 400});
    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email    
        }   
    });
    if(exist){
        return new NextResponse(JSON.stringify("User Already Exists"), {status: 409});
    } 
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            image
        }
    });
    return NextResponse.json(user);
}