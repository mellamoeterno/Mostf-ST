// app/api/webhook/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
//this webhook is for listening to sells  data from stripe
// 🔹 Initialize Firebase only once
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const db = getFirestore();

// 🔹 Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// ⚠️ Needed to read raw body (Stripe verifies signature from raw body)
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (err) {
      console.error("⚠️ Stripe signature verification failed:", err.message);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // ✅ Handle specific event types
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // You can expand session.line_items if you want product details
      // Example structure:
      // session.id
      // session.amount_total
      // session.customer_details.email
      // session.payment_status ("paid")
      // session.metadata (custom fields you added when creating the session)

      const orderRef = doc(db, "orders", session.id);

      await setDoc(orderRef, {
        amount_total: session.amount_total || 0,
        currency: session.currency || "brl",
        payment_status: session.payment_status || "unknown",
        customer_email: session.customer_details?.email || null,
        customer_name: session.customer_details?.name || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      console.log("✅ Order stored in Firestore:", session.id);
    } else {
      console.log(`Unhandled event type: ${event.type}`);
    }

    // Acknowledge receipt to Stripe quickly
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
