import db from "@/app/db/db";
import User from "@/app/db/model";
import { NextResponse, type NextRequest } from "next/server.js";

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { id }: { id: string } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Missing information." },
        { status: 400 }
      );
    }

    await db.connect();

    await User.findOneAndDelete({ externalId: id });
    console.log(`User ${id} deleted.`)

    await db.disconnect()

    return NextResponse.json(
      { message: `User ${id} deleted.` },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
