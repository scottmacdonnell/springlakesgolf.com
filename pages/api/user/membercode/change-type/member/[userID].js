import { changeMemberRole } from '../../../../../../lib/firestore'

export default async function (req, res) {
  const { userID } = req.query

  const { data } = await changeMemberRole(userID)

  // if (data) {
  //   res.status(200).json(data)
  // }

  res.status(200).json({ data })
}