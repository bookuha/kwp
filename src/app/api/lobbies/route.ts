import { NextResponse } from "next/server";
import { GameLobby } from "@/app/models";

export interface LobbiesResponse {
  playing: GameLobby[];
  staging: GameLobby[];
}

const DATA_SOURCE_URL = "http://localhost:3000/api/server-info";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL, { next: { revalidate: 15 } });

  const json = await res.json();

  const lobbies: LobbiesResponse = json["cnc3kw"]["games"];

  return NextResponse.json(lobbies);
}
