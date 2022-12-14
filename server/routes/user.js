const { Router } = require("express");
const authenticator = require("../middleware/authentication");

const userController = require("../controllers/user.js");

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/habits/:id", authenticator, userController.habitsShow);
userRouter.get("/dates/:id", authenticator, userController.datesShow);
userRouter.get("/logout/:id", authenticator, userController.logout);
userRouter.get("/:id", authenticator, userController.show);
userRouter.delete("/:id", authenticator, userController.destroy);
userRouter.put("/:id", authenticator, userController.update);

module.exports = userRouter;
