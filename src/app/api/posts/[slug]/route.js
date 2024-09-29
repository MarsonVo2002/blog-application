import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  const {slug} = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {user: true},
    })
    return new NextResponse(
        JSON.stringify(post, { status: 200 })
      );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
export const POST = async (req) => {
  const session = await getAuthSession()
  if(!session) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 401 })
    );
  }
 
  try {
    const body = await req.json();
    const post = await prisma.comment.create({
     data:{...body, userEmail: session.user.email}
    })
    return new NextResponse(
        JSON.stringify(post, { status: 200 })
      );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};