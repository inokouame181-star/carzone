import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../lib/supabase";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const full_name = formData.get("full_name") as string;
  const phone = formData.get("phone") as string;
  const car_name = formData.get("car_name") as string;
  const message = formData.get("message") as string;

  await supabase.from("reservations").insert({
    full_name,
    phone,
    car_name,
    message,
  });

  return NextResponse.redirect(new URL("/merci", request.url), 303);
}