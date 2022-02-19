const { BatteryNotFoundError } = require("../errors/battery");
const Battery = require("../models/battery");

module.exports = {
  /**
   * @returns {Promise<Battery>}
   */
  async getBatteries() {
    return Battery.find().sort("createdAt"); 
    //Find all battery objects and sort them by date of creation
  },

  /**
   * @param {import("mongoose").Types.ObjectId} battery
   * @returns {Promise<Battery>}
   */
  async getBatteryById(battery) {
    const batteryDoc = await Battery.findById(battery._id); 
    //Find battery object specified by id 
    if (batteryDoc == null) {
      throw new BatteryNotFoundError({ _id: battery._id });
      //Throw a 404 error if object not found
    }
    return batteryDoc;
  },

  async createBattery({ manufactringDate, capacity, brand, station, serial }) {
    return Battery.create({ manufactringDate, capacity, brand, station, serial }); 
    //create a new battery object with the above params 
  }
}