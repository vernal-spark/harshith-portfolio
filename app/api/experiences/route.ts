import { NextResponse } from "next/server";
import { getExperiences } from "@/lib/database";

export async function GET() {
  try {
    const experiences = await getExperiences();
    return NextResponse.json(experiences);
  } catch (error) {
    console.error("Error in experiences API:", error);
    return NextResponse.json(
      { error: "Failed to fetch experiences" },
      { status: 500 }
    );
  }
}
