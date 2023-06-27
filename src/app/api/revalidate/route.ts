import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(resquest: NextRequest) {
  const urlParams = new URL(resquest.url);
  const timeRequested = Number(
    urlParams.searchParams.get("t") || new Date().getTime()
  );
  revalidateTag("tagTime");
  return NextResponse.json({ revalidated: true, now: timeRequested });
}
