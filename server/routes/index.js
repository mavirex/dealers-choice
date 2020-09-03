const router = require("express").Router()
//import models from /db
const db = require('../db');
const { Meal, Dish } = db;
//routes go here
router.get('/meals', async (req, res, next)=> {
    try {
      res.send(await Meal.findAll());
    }
    catch(err){
      next(err);
    }
  });

  router.get('/dishes', async (req, res, next)=> {
    try {
      res.send(await Dish.findAll());
    }
    catch(err){
      next(err);
    }
  });

  router.get('/meals/:mealId/dishes', async(req, res, next)=> {
    try {
      res.send(await Dish.findAll({ where: { mealId: req.params.mealId }}));
    }
    catch(ex){
      next(ex);
    }
  });

module.exports = router
