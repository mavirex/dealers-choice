//import your db
//import your models
const db = require('./db')
const Meal= require('./models/Meal')
const Dish= require('./models/Dish')

//state your model associations (hasOne etc)
Dish.belongsTo(Meal)
Meal.hasMany(Dish)

const syncAndSeed = async()=> {
    await db.sync({ force: true });
    const [breakfast, lunch, dinner] = await Promise.all([
      Meal.create({ name: 'Breakfast' }),
      Meal.create({ name: 'Lunch' }),
      Meal.create({ name: 'Dinner'}),
    ]);
    const [] = await Promise.all([
        Dish.create({ name: 'Omelette',  mealId:breakfast.id }),
        Dish.create({ name: "Pancakes", mealId:breakfast.id }),
        Dish.create({ name: 'Yogurt Parfait', mealId:breakfast.id }),
        Dish.create({ name: "Mac 'n Cheese",  mealId:lunch.id }),
        Dish.create({ name: "Sushi", mealId:lunch.id }),
        Dish.create({ name: 'Waldorf Salad', mealId:lunch.id}),
        Dish.create({ name: 'Fajitas',  mealId:dinner.id }),
        Dish.create({ name: 'Eggplant Parmesan', mealId:dinner.id }),
        Dish.create({ name: 'Lobster', mealId:dinner.id }),
      ]);
  };

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
    db,
    Meal,
    Dish,
    syncAndSeed
}