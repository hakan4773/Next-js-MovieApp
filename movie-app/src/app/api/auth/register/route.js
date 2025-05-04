import bcrypt from 'bcrypt';

let users = []; 

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return new Response(JSON.stringify({ message: 'Email ve şifre gereklidir' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });

  return new Response(JSON.stringify({ message: 'Kayıt başarılı' }), { status: 201 });
}
