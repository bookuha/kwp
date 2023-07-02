import { NextResponse } from "next/server";
import { Player } from "@/app/models";

const DATA_SOURCE_URL = "https://info.server.cnc-online.net/";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL, { next: { revalidate: 15 } });

  const json = await res.json();

  return NextResponse.json(json);
}
