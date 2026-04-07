import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendWaitlistWelcomeEmail, sendAdminNotification } from "@/lib/emailService";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) {
      // Duplicate email — treat as success but don't send email again
      if (error.code === "23505") {
        return NextResponse.json({ 
          success: true, 
          message: "already_exists",
          note: "You're already on our waitlist!" 
        });
      }
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Send welcome email to user (don't await to avoid blocking response)
    // We'll send it in the background, but log any errors
    sendWaitlistWelcomeEmail(email).catch(err => {
      console.error("Failed to send welcome email:", err);
    });

    // Optional: Send admin notification (also in background)
    sendAdminNotification(email).catch(err => {
      console.error("Failed to send admin notification:", err);
    });

    return NextResponse.json({ 
      success: true,
      message: "Welcome email sent!" 
    });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}