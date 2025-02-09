import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    // Here you would typically integrate with your email service
    // For example, using nodemailer, SendGrid, etc.
    console.log("Email would be sent with:", { name, phone, message });

    // For now, we'll just simulate a successful response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
