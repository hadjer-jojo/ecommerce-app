const mongoose = require("mongoose")

// schema li en utilise pour mes informations! 
const productSchema =new mongoose.Schema({
    
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category_id: { type: Number, required: true },
  image: { type: String, required: true },
  color: [String],
  stock: { type: Number, required: true, min: 0 }
}) 

// pour en peut utiliser il faut exporter 
// creation d'un fichier in bdd 

module.exports = mongoose.model("product",productSchema)