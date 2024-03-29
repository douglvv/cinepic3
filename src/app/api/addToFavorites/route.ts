import db from "@/app/db/db";
import User, { IUser } from "@/app/db/model";
import { HydratedDocument } from "mongoose";
import { NextResponse, type NextRequest } from "next/server.js";

// TODO: verificar se o userId da sessao é o mesmo que irá adicionar aos favoritos
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const {
      id,
      imdbID,
      posterUrl,
    }: { id: string; imdbID: string; posterUrl: string } = await req.json();
    console.log("id: ", id, "imdbID: ", imdbID);

    if (!id || !imdbID || !posterUrl) {
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

    const isTitleAlreadyFavorite: boolean = user.favorites.some(
      (favorite) => favorite.imdbID === imdbID
    );

    if (isTitleAlreadyFavorite) {
      return NextResponse.json(
        { message: "Title already in favorites" },
        { status: 400 }
      );
    }

    user.favorites.push({ imdbID: imdbID, posterUrl: posterUrl });

    await user.save();

    console.log(`Title: ${imdbID} added to User: ${id}'s favorites`);

    await db.disconnect();

    return NextResponse.json(
      { message: `Title: ${imdbID} added to User: ${id} favorites` },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
