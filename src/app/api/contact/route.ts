import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the required fields
    const requiredFields = ['name', 'email', 'message', 'interest'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Send the form data to your email service
    // You'll need to add your email service configuration here
    // For example, using SendGrid, Mailgun, or other email services

    // For now, we'll just log the data
    console.log('Form submission:', body);

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 