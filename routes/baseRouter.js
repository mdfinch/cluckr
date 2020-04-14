const express = require("express");
const router = express.Router();

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.get("/welcome", (request, response) => {
  response.render("welcome");
});
router.get("/", (request, response) => {
  response.redirect("/clucks");
});

router.post("/sign_in", (request, response) => {
  const params = request.body;

  response.cookie("username", params.username, { maxAge: COOKIE_MAX_AGE });

  response.redirect("/clucks");
});

router.post("/sign_out", (request, response) => {

  response.clearCookie("username");
  response.redirect("/");
});


module.exports = router;
