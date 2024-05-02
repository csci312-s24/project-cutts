import { createRouter } from "next-connect";
import authenticated from "@/lib/middleware";
import User from "../../../../models/User";
import { onError } from "../../../../lib/middleware";

const router = createRouter();

router.put(authenticated, async (req, res) => {
  // Perform insert and send edited user info
  const { id, ...editedUser } = req.body;
  const user = await User.query().updateAndFetchById(id, editedUser);
  res.status(200).json(user);
});

export default router.handler({ onError });
