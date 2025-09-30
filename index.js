const express = require("express")
const mongoose = require("mongoose") 
const product = require("./models/product.js");
const order = require ("./models/order.js")
const Mail = require("./models/mail"); 
const cors = require('cors'); 

//new comment 


const app = express();            
app.use(express.json());  
app.use(cors());


//create new produit
app.post("/products", async (req, res) => {   
  try {
   
    const newProduct = new product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category_id: req.body.category_id,
      image: req.body.image,
      color: req.body.color,
      stock: req.body.stock
    });

    await newProduct.save();

    res.status(201).json({ message: "Produit créé avec succès !", product: newProduct });

  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du produit.", error: error.message });
  }
});




// recuperer les produit from data base 
app.get("/products", async (req, res) => {
  try {
    const products = await product.find(); // tous les produits de la collection
    res.json(products); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




//create new order 

app.post("/orders", async (req, res) => {   
  try {
    const { customer, items, totalPrice, deliveryType } = req.body;

    if (!customer || !customer.firstName || !customer.lastName || !customer.phone || !customer.address) {
      return res.status(400).json({ message: " Informations client incomplètes" });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({ message: " Votre panier est vide" });
    }

    if (!totalPrice || totalPrice <= 0) {
      return res.status(400).json({ message: " Montant total invalide" });
    }

    if (!deliveryType) {
      return res.status(400).json({ message: " Type de livraison requis" });
    }

    const newOrder = new order({
      customer,
      items,
      totalPrice,
      deliveryType,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order created successfully!", order: newOrder });

  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de la commande.", error: error.message });
  }
});





// affichage de orders in page admin 
app.get("/orders", async (req, res) => {
  try {
    const orders = await order.find({}); // pour recuperer orders
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




//create email homepage  
app.post("/mails", async (req, res) => { 
    try {
        const { mail: emailValue } = req.body; 

        if (!emailValue) {
            return res.status(400).json({ message: "Please enter your email!" });
        }
        const newMail = new Mail({ mail: emailValue }); 

        await newMail.save();// in database 

        res.status(201).json({ message: "Email created successfully!", mail: newMail });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
});




// connexion Mongo et lancement du serveur
mongoose.connect("mongodb://localhost:27017/ecommerce-app",
  { serverSelectionTimeoutMS: 5000 })
.then(() => {
  console.log("Connected")

  app.listen(3001, () => {        
    console.log("express server started !");
  })
})
.catch((err) => {
  console.log(err.message)
})
