// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('User Favourites Recieved:')
  console.log(req.body)
  console.log('you can save this in your DB or do whatever with it.')

  res.redirect(302, '/user/signUpCompleted')
}
