import { getUser } from '../../../../lib/db-admin'

export default async function (req, res) {
  const {
    userID = uid
  } = req.query

  const { data } = await getUser(userID)
  
  if (data) {
    res.status(200).json(data)
  }
}