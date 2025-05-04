import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'ASFSFGFDASSADDFDFSFEDF';

const users=[{
    name:"Hakan",
    email:"user1@gmail.com",
    password: await bcrypt.hash("1234", 10)
}]
export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return new Response(JSON.stringify({ message: 'Kullanıcı bulunamadı' }), { status: 401 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return new Response(JSON.stringify({ message: 'Şifre yanlış' }), { status: 401 });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
  return new Response(JSON.stringify({ token }), { status: 200 });
}
