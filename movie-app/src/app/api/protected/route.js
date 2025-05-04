import jwt from 'jsonwebtoken';

const SECRET_KEY = 'ASFSFGFDASSADDFDFSFEDF';

export async function GET(req) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return new Response(JSON.stringify({ message: 'Token bulunamadı' }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return new Response(JSON.stringify({ message: 'Erişim başarılı', user: decoded }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Geçersiz token' }), { status: 401 });
  }
}

