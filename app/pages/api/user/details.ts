// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('User details Recieved:')
  console.log(JSON.stringify(req.body, null, 2))
  console.log('you can save this in your DB or do whatever with it.')

  res.redirect(302, '/user/favourites')
}
