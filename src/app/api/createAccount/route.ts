import db from "@/app/db/db";
import User from "@/app/db/model";
import { NextResponse, type NextRequest } from "next/server.js";

export async function POST(req: NextRequest) {
  try {
    const { id }: { id: string } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Missing information." },
        { status: 400 }
      );
    }

    await db.connect();

    const user = new User({
      externalId: id,
    });

    await user.save();
    console.log(`User ${id} created.`)

    const userData = {
      externalId: user.externalId,
      favorites: user.favorites,
    };

    await db.disconnect();

    return NextResponse.json(userData, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
