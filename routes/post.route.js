"use strict";

const express = require("express");
const router = express.Router();

const { Post } = require("../models/index");


router.get("/post", getAllPosts);
router.get("/post/:id", getOnePost);
router.post("/post", addPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

async function getAllPosts(req, res) {
  let posts = await Post.findAll();
  res.status(200).json({
    posts,
  });
}


async function getOnePost(req, res) {
  const id = req.params.id;
  const post = await Post.findOne({
    where: { id: id },
  });
  res.status(200).json(post);
}


async function addPost(req, res) {
  const newPost = req.body;
  await Post.create(newPost).then(async () => {
    await Post.findAll().then((posts) => {
      res.status(200).json(posts);
    });
  });
}


async function updatePost(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const post = await Post.findOne({
    where: { id: id },
  });
  const updatedPost = await post.update(obj);
  res.status(201).json(updatedPost);
}


async function deletePost(req, res) {
  const id = req.params.id;
  await Post.destroy({
    where: { id: id },
  }).then(() => {
    res.status(204).send("");
  });
}

module.exports = router;