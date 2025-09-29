import { NextResponse } from "next/server";
import { getSocialLinks } from "@/lib/database";

export async function GET() {
  try {
    const socialLinks = await getSocialLinks();
    return NextResponse.json(socialLinks);
  } catch (error) {
    console.error("Error in social links API:", error);
    return NextResponse.json(
      { error: "Failed to fetch social links" },
      { status: 500 }
    );
  }
}
