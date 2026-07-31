import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../lib/supabase";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const full_name = formData.get("full_name") as string;
  const phone = formData.get("phone") as string;
  const car_name = formData.get("car_name") as string;
  const car_year = formData.get("car_year") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  await supabase.from("sell_requests").insert({
    full_name,
    phone,
    car_name,
    car_year,
    price: price ? Number(price) : null,
    description,
  });

  return NextResponse.redirect(new URL("/merci", request.url), 303);
}