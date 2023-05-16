import { productsList } from "@/public/apitest";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(productsList);
}
