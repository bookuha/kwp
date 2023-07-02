import { NextResponse } from "next/server";
import { Player } from "@/app/models";

const DATA_SOURCE_URL = "http://localhost:3000/api/server-info";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const json = await res.json();

  const players = Object.values<Player>(json["cnc3kw"]["users"]);

  console.log("Inside route: ", players);

  return NextResponse.json(players);
}
