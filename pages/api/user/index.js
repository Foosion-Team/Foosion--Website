// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createUser, getUser } from "../../../utils/individual";
export default async (req, res) => {
  if (req.method === "GET") {
    const refs = await getUser();
    const usersData = refs.docs.map((user) => ({
      id: user.id,
      ...user.data(),
    }));
    res.status(200).json({ usersData });
  } else if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    // const newData = {
    //   name: data.name,
    //   farmSize: data.farmSize,
    //   cropType: data.cropType,
    //   email: data.email,
    //   farmLocation: data.farmLocation,
    //   phone: data.phone,
    //   yeild: data.yield,
    //   identity: data.identity,
    //   date: data.date
    // };
    await createUser(data);
    res.json({
      success: "Sent successfully",
      error: "Error sending details",
    });
  }
};

// cropType
// "09039215387"
// email
// "09039215387"
// farmLocation
// "09039215387"
// farmSize
// "09039215387"
// name
// "09039215387"
// phone
// "09039215387"
// (string)
// yield
// "09039215387"
