const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Baby" },
    { name: "Kids" },
    { name: "Grown-Ups" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Honey Bee PJ",
      description: "Honey Bee pj for Baby.",
      image: "onesie.jpg",
      category: categories[0]._id,
      price: 12,
      quantity: 500,
    },
    {
      name: "Funky Onesie",
      description: "Funky Onesie for Baby.",
      image: "baby-funky-onesie.jpg",
      category: categories[0]._id,
      price: 10,
      quantity: 500,
    },
    {
      name: "Kid-set",
      category: categories[1]._id,
      description: "Kids set.",
      image: "kid-set.jpg",
      price: 20,
      quantity: 600,
    },
    {
      name: "Kid-onesie",
      category: categories[1]._id,
      description: "Kids onesie",
      image: "kid-onesie-2.jpg",
      price: 20,
      quantity: 600,
    },
    {
      name: "White pants",
      category: categories[2]._id,
      description: "White pants",
      image: "white-pants.jpg",
      price: 25,
      quantity: 600,
    },
    {
      name: "pants",
      category: categories[2]._id,
      description: "pants",
      image: "pants.jpg",
      price: 25,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Avani",
    lastName: "Jadeja",
    email: "avani@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Bhumi",
    lastName: "Jadeja",
    email: "bhumit@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
