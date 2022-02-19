const { MotoNotFoundError } = require("../errors/moto");
const Moto = require("../models/moto");

module.exports = {
  /**
   * @returns {Promise<Moto>}
   */
  async getMotos() {
    return Moto.find().sort("createdAt");
    //Find all driver objects and sort them by date of creation
  },

  /**
   * @param {import("mongoose").Types.ObjectId} moto
   * @returns {Promise<Moto>}
   */
  async getMotoById(moto) {
    const motoDoc = await Moto.findById(moto._id);
    //Find driver object specified by id 
    if (motoDoc == null) {
      throw new MotoNotFoundError({ _id: moto._id });
      //Throw a 404 error if object not found
    }
    return motoDoc;
  },

  async createMoto({ plateNo, driver, battery }) {
    return Moto.create({ plateNo, driver, battery });
    //create a new moto object with the above params
  }
}