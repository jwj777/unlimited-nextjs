import { neon } from '@neondatabase/serverless';

export async function POST(request) {
  const data = await request.json();
  const { firstName, lastName, company, email, phone, smsConsent, sourcePage } = data;
  const name = `${firstName} ${lastName}`.trim();

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO leads (name, email, phone, company, source_page, raw_payload)
      VALUES (${name}, ${email}, ${phone}, ${company}, ${sourcePage}, ${data})
    `;
  } catch (err) {
    console.error('Neon insert failed:', err);
    return Response.json({ success: false, error: 'Database error' }, { status: 500 });
  }

  try {
    await fetch('https://hooks.zapier.com/hooks/catch/8026392/3fi7xo8/', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, company, smsConsent, sourcePage }),
    });
  } catch (err) {
    console.error('Zapier forward failed:', err);
  }

  return Response.json({ success: true });
}
