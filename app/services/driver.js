const { DriverNotFoundError } = require("../errors/driver");
const Driver = require("../models/driver");

module.exports = {
  /**
   * @returns {Promise<Driver>}
   */
  async getDrivers() {
    return Driver.find().sort("createdAt");
  },

  /**
   * @param {import("mongoose").Types.ObjectId} driver
   * @returns {Promise<Driver>}
   */
  async getDriverById(driver) {
    const driverDoc = await Driver.findById(driver._id);
    if (driverDoc == null) {
      throw new DriverNotFoundError({ _id: driver._id });
    }
    return driverDoc;
  },

  async createDriver({ firstName, lastName, licenseNo, registrationDate }) {
    return Driver.create({ firstName, lastName, licenseNo, registrationDate });
  }
}