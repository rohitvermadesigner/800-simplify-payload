import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type PackageLeadRequest = {
  name?: unknown
  phone?: unknown
  email?: unknown
  package?: unknown
}

const toText = (value: unknown) => (typeof value === 'string' ? value.trim() : '')
const toDigits = (value: unknown) => toText(value).replace(/\D/g, '')

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function POST(request: Request) {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS

  if (!emailUser || !emailPass) {
    return NextResponse.json(
      { message: 'Lead email is not configured on the server.' },
      { status: 500 },
    )
  }

  let body: PackageLeadRequest

  try {
    body = (await request.json()) as PackageLeadRequest
  } catch {
    return NextResponse.json({ message: 'Invalid form submission.' }, { status: 400 })
  }

  const name = toText(body.name)
  const phone = toDigits(body.phone)
  const email = toText(body.email)
  const packageName = toText(body.package)

  if (!name || !phone || !email || !packageName) {
    return NextResponse.json({ message: 'Please fill all required fields.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"800 Simplify" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: 'Package enquiry from 800 Simplify website',
      html: `
        <h2>New package enquiry</h2>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
          <tr><th align="left">Full name</th><td>${escapeHtml(name)}</td></tr>
          <tr><th align="left">Phone number</th><td>${escapeHtml(phone)}</td></tr>
          <tr><th align="left">Email</th><td>${escapeHtml(email)}</td></tr>
          <tr><th align="left">Package</th><td>${escapeHtml(packageName)}</td></tr>
        </table>
      `,
      text: [
        `Full Name: ${name}`,
        `Phone Number: ${phone}`,
        `Email: ${email}`,
        `Package: ${packageName}`,
      ].join('\n'),
    })
  } catch (error) {
    console.error('Package lead email failed', error)

    return NextResponse.json({ message: 'Unable to send your enquiry right now.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
