const express = require("express");
const knex = require("../db/connection");

const router = express.Router();

router.get("/new", (request, response) => {
  response.render("clucks/new");
});

router.post("/", (request, response) => {


  const {username, image_url, content} = request.body;
  knex("clucks")
    .insert({
      username,
      image_url,
      content,
    })
    .returning("*")
    .then((cluck) => {
      response.redirect(`/clucks/${cluck[0].id}`);
    });
});


router.get("/", (request, response) => {
  knex("clucks")
    .orderBy("created_at", "desc")
    .then((clucks) => {
      
      response.render("clucks/index", { clucks });
    });
});


router.get("/:id", (request, response) => {

  const id = request.params.id;
  knex("clucks")
    .where("id", id)
    .first()
    .then((cluck) => {
      console.log(cluck);
      if (cluck) {
        response.render("clucks/show", { cluck });
      } else {
        response.redirect("/clucks");
      }
    });
});


router.delete("/:id", (request, response) => {
  
  knex("clucks")
    .where("id", request.params.id)
    .del()
    .then(() => {
      response.redirect("/clucks");
    });
});


router.get("/:id/edit", (request, response) => {
  knex("clucks")
    .where("id", request.params.id)
    .first()
    .then((cluck) => {
      response.render("clucks/edit", { cluck });
    });
});


router.patch("/:id", (request, response) => {
  const updatedCluck = {
    username: request.body.username,
    image_url: request.body.image_url,
    content: request.body.content,
  };

  knex("clucks")
    .where("id", request.params.id)
    .update(updatedCluck)
    .then(() => {
      response.redirect(`/clucks/${request.params.id}`);
    });
});

module.exports = router;
