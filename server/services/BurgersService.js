import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class BurgerService {
  async getAll(query = {}) {
    return await dbContext.Burgers.find(query)
  }

  async getOne(burgerId) {
    let burgerFound = await dbContext.Burgers.findById(burgerId)
    if(!burgerFound) {
      throw new BadRequest("No burger exists with that Id")
    }
    return burgerFound
  }

  async create(body) {
    return await dbContext.Burgers.create(body)
  }

  async edit(id, body) {
    let updatedBurger = await dbContext.Burgers.findByIdAndUpdate(id, body, {new:true})
    if(!updatedBurger) {
      throw new BadRequest("No burger exists with that Id")
    }
    return updatedBurger
  }

  async delete(id) {
    let burger = await dbContext.Burgers.findByIdAndDelete(id)
    if(!burger) {
      throw new BadRequest("No burger exists with that Id")
    }
    return "Burger successfully deleted"
  }
}

export const burgerService = new BurgerService