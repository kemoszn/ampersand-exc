const { BatteryNotFoundError } = require("../errors/battery");
const Battery = require("../models/battery");

module.exports = {
  /**
   * @returns {Promise<Battery>}
   */
  async getBatteries() {
    return Battery.find().sort("createdAt");
  },

  /**
   * @param {import("mongoose").Types.ObjectId} battery
   * @returns {Promise<Battery>}
   */
  async getBatteryById(battery) {
    const batteryDoc = await Battery.findById(battery._id);
    if (batteryDoc == null) {
      throw new BatteryNotFoundError({ _id: battery._id });
    }
    return batteryDoc;
  },

  async createBattery({ manufactringDate, capacity, brand, station, serial }) {
    return Battery.create({ manufactringDate, capacity, brand, station, serial });
  }
}