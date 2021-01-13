import {Schema} from "mongoose";
// const Schema = mongoose.Schema

const Burger = new Schema (
  {
    bun: {type: String, required: true},
    cheese: {type: String, required: true},
    price: {type: Number, required: true},
    fries: {type: Boolean, required: true},
  }
)
export default Burger