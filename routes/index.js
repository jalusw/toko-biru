const { Router } = require("express");
const { HomeController } = require("../controllers");
const {
  AuthenticationMiddleware,
  MulterMiddleware,
} = require("../middlewares");
const ProfileController = require("../controllers/ProfileController");

const router = Router();

/* GET home page. */
router.get("/", HomeController.index);
router.get(
  "/profile",
  AuthenticationMiddleware.auth,
  ProfileController.profile,
);

router.post(
  "/profile",
  AuthenticationMiddleware.auth,
  MulterMiddleware().single("image"),
  ProfileController.update,
);

module.exports = router;
