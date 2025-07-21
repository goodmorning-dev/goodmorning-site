import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const email = body.email

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  const response = await fetch(
    'https://connect.mailerlite.com/api/subscribers',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    },
  )

  if (!response.ok) {
    const error = await response.json()
    return NextResponse.json(
      { error: error.message || 'MailerLite error' },
      { status: 500 },
    )
  }

  return NextResponse.json({ success: true })
}
