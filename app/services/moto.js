const { MotoNotFoundError } = require("../errors/moto");
const Moto = require("../models/moto");

module.exports = {
  /**
   * @returns {Promise<Moto>}
   */
  async getMotos() {
    return Moto.find().sort("createdAt");
  },

  /**
   * @param {import("mongoose").Types.ObjectId} moto
   * @returns {Promise<Moto>}
   */
  async getMotoById(moto) {
    const motoDoc = await Moto.findById(moto._id);
    if (motoDoc == null) {
      throw new MotoNotFoundError({ _id: moto._id });
    }
    return motoDoc;
  },

  async createMoto({ plateNo, driver, battery }) {
    return Moto.create({ plateNo, driver, battery });
  }
}