import db from "@/app/db/db";
import User, { IUser } from "@/app/db/model";
import { HydratedDocument } from "mongoose";
import { NextResponse, type NextRequest } from "next/server.js";

// TODO: verificar se o userId da sessao é o mesmo que irá adicionar aos favoritos
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { id, imdbID }: { id: string; imdbID: string } = await req.json();

    if (!id || !imdbID) {
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

    const index = user.favorites.findIndex(
      (favorite) => favorite.imdbID === imdbID
    );

    if (index === -1) {
      return NextResponse.json(
        { message: "Title is not in favorites" },
        { status: 400 }
      );
    }

    user.favorites.splice(index, 1);

    await user.save();

    console.log(`Title: ${imdbID} removed from User: ${id}'s favorites`);

    await db.disconnect();

    return NextResponse.json(
      { message: `Title: ${imdbID} removed from User: ${id}'s favorites` },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
