const { User } = require('../../common/models')

export default function handler(req, res) {
  if (req.method == 'POST') {
    res.status(200).json({ name: req.body })
  } else {
    res.status(405).send()
  }
}
