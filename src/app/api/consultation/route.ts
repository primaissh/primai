import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the request payload in dev console
    console.log("New Consultation Form Submission Received:", body);

    // Placeholder: This is where you would hook up the Resend API or write to Google Sheets.
    // Example:
    // const resendApiKey = process.env.RESEND_API_KEY;
    // ... code to send email ...

    return NextResponse.json(
      { success: true, message: "Consultation booked successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request." },
      { status: 400 }
    );
  }
}
