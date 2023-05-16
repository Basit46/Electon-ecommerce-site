import { productsList } from "@/public/apitest";
import { NextResponse } from "next/server";

export async function GET({ params }) {
  const item = productsList[2];
  return NextResponse.json(item);
}
