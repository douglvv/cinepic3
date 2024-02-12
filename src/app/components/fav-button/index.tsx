"use client";
import { Star } from "lucide-react";
import { useUser } from "@clerk/nextjs";

function FavButton({ imdbID }: { imdbID: string }) {
  const { user } = useUser();

  return (
    <>
      <div className="flex items-center justify-center p-1 rounded-full bg-transparent">
        <button title="Add to favorites">
          <Star className="text-neutral-200 drop-shadow hover:text-yellow-400 w-6 h-6 transition-all duration-300" />
        </button>
      </div>
    </>
  );
}

export default FavButton;

//
// Req para a db pra retornar o user
// pega o array de favoritos
// verifica se o title esta nos favoritos baseado na prop da id
// se estiver retorna o icone para desfavoritas
//
// rotas:
// favorito -> rota para desfavoritar
// nao-favorito -> rota para favoritar
