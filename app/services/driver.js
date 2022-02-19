const { DriverNotFoundError } = require("../errors/driver");
const Driver = require("../models/driver");

module.exports = {
  /**
   * @returns {Promise<Driver>}
   */
  async getDrivers() {
    return Driver.find().sort("createdAt");
    //Find all driver objects and sort them by date of creation
  },

  /**
   * @param {import("mongoose").Types.ObjectId} driver
   * @returns {Promise<Driver>}
   */
  async getDriverById(driver) {
    const driverDoc = await Driver.findById(driver._id);
    //Find driver object specified by id 
    if (driverDoc == null) {
      throw new DriverNotFoundError({ _id: driver._id });
      //Throw a 404 error if object not found
    }
    return driverDoc;
  },

  async createDriver({ firstName, lastName, licenseNo, registrationDate }) {
    return Driver.create({ firstName, lastName, licenseNo, registrationDate });
    //create a new driver object with the above params
  }
}