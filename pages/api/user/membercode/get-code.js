import { getCode } from '../../../../lib/db-admin'

export default async function (_, res) {
  const { data } = await getCode()
  
  if (data) {
    res.status(200).json(data)
  }
}