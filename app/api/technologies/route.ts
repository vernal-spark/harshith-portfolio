import { NextResponse } from "next/server";
import { getTechnologies } from "@/lib/database";

export async function GET() {
  try {
    const technologies = await getTechnologies();
    return NextResponse.json(technologies);
  } catch (error) {
    console.error("Error in technologies API:", error);
    return NextResponse.json(
      { error: "Failed to fetch technologies" },
      { status: 500 }
    );
  }
}
