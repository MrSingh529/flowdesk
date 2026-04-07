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
      if (error.code === "23505") {
        return NextResponse.json({ 
          success: true, 
          message: "already_exists",
        });
      }
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Send emails and log results
    const emailResult = await sendWaitlistWelcomeEmail(email);
    console.log("Welcome email result:", emailResult);
    
    const adminResult = await sendAdminNotification(email);
    console.log("Admin notification result:", adminResult);

    if (!emailResult.success) {
      console.error("Failed to send welcome email to:", email, emailResult.error);
    }

    return NextResponse.json({ 
      success: true,
      message: "Added to waitlist!" 
    });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}