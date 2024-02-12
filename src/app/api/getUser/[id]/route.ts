import db from "@/app/db/db";
import User, { IUser } from "@/app/db/model";
import { HydratedDocument } from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse, type NextRequest } from "next/server.js";

// VERIFICAR SE O ID É O MESMO DA SESSAO ATIVA
export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const id = params.id

    console.log(id);

    if (!id) {
      return NextResponse.json(
        { message: "Missing information" },
        { status: 400 }
      );
    }

    await db.connect();

    const user = (await User.findOne({
      externalId: id,
    })) as HydratedDocument<IUser>;

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const userData = {
      externalId: user.externalId,
      favorites: user.favorites,
    };

    await db.disconnect();

    return NextResponse.json({ user: userData }, { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
