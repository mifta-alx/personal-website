import { getProjectLikes } from "../../service/db"


export default defineEventHandler(async (event) => {
  return await getProjectLikes(event)
})