// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("home route")
  res.status(200).json({ name: 'John Doe' })
}
