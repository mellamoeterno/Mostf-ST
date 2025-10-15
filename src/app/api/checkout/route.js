import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://mostf-st.vercel.app/obrigadoPelaCompra",
      cancel_url: "https://mostf-st.vercel.app/api/webhook",
      line_items: body.items.map((item) => ({
        price_data: {
          currency: "brl",
          product_data: {
            name: item.description,
          },
          unit_amount: item.price, // centavos conversion from cart page
        },
        quantity: item.quantity,
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
