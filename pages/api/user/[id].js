// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  createUser,
  deleteUser,
  oneUser,
  updateOneUser,
} from "../../../utils/individual";
export default async (req, res) => {
  const { id } = req.query;
  const data = req.body;
  
  if (req.method === "GET") {
    const refs = await oneUser(id);
    res.status(200).json(refs);
  } else if (req.method === "POST") {
    const data = req.body;
    const ref = await createUser(data);
    res.json(ref);
  } else if (req.method === "DELETE") {
    await deleteUser(id);
    res.send("deleted");
  } else if (req.method === "PUT") {
    await updateOneUser(id, data);
    res.send("updated");
  }
};
