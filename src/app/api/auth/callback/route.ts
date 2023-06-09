import { api } from '@/src/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })
  const { token } = registerResponse.data

  const redirecURL = redirectTo ?? new URL('/', request.url)

  const cookieExpiration = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirecURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiration} `,
    },
  })
}
