import { burgerService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgerController extends BaseController {
  constructor(){
    super('api/burgers')
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  
  async getAll(req, res, next) {
    try {
      res.send(await burgerService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await burgerService.getOne(req.params.carId))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await burgerService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await burgerService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await burgerService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
