// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  const data = await fs.promises.readFile('data/resume.json')
  res.status(200).json(JSON.parse(data))
}
